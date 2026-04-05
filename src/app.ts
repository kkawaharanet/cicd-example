import { Hono } from "hono";
import { sum } from "./sum.js";

export const app = new Hono().get("/sum", (c) => {
  return c.json({ result: sum(1, 1) });
});
