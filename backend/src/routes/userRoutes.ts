import { Router } from "express";
import { postBook } from "../controllers/bookController";

const router = Router();

router.post("/books", postBook)

export default router;
