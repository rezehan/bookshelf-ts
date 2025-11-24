import request from "supertest";
import app from "../src/app";
import { describe, it, expect } from "vitest";

describe("GET /", () => {
  it("should return welcome message", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello from Express + TS" });
  });
});
