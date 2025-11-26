import { Router } from "express";
import db from "../config/db";
import { postBook } from "../controllers/bookController";

const router = Router();


router.post("/", postBook);   // ← HANYA "/"
router.get("/", (req, res) => {   // ← HANYA "/"
    db.query("SELECT * FROM book", (err, rows) => {
        if (err) return res.status(500).json({ message: "DB error" });
        res.json(rows);
    });
});



export default router;
