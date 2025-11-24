import { Router } from "express";
import { getUsers, login } from "../controllers/userController";

const router = Router();

router.get("/users", getUsers);
router.post("/login", login);

export default router;
