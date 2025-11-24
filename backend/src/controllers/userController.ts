import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "Raihan" },
    { id: 2, name: "Adit" },
  ]);
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.json({
    message: "Login sukses",
    email,
  });
};
