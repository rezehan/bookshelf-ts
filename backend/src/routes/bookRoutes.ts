import { Router } from "express";
import db from "../config/db";

const router = Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM book", (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(rows);
  });
});

export default router;
