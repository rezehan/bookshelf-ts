import express from "express";

const app = express();
app.use(express.json());

const books = [];

// added book
app.post("/books", (req, res) => {
  
})

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + TS" });
});

export default app;
