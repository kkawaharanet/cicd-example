import { Hono } from "hono";
import { sum } from "./sum.js";

export const app = new Hono();

/**
 * 足し算API
 */
app.get("/sum", (c) => {
  return c.json({ result: sum(1, 1) });
});
