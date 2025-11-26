import { Request, Response } from "express"
import { nanoid } from "nanoid";
import db from "../config/db";

export const postBook = (req: Request, res: Response) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;
    const id: string = nanoid(16);
    let finished: boolean = false;
    const insertedAt: string = new Date().toISOString();
    const updatedAt: string = insertedAt;
    
    if(pageCount === readPage) {
        finished = true;
    };
    
    const sql = `
    INSERT INTO book 
    (id, name, year, author, summary, publisher, pageCount, readPage, reading, finished, insertedAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        finished,
        insertedAt,
        updatedAt
    ];    

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }

        res.status(201).json({
            message: "Book added successfully",
            bookId: id
        });
    });
}