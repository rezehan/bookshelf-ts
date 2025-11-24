import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import bookRoutes from "./routes/bookRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

app.use("/api", userRoutes);

export default app;
