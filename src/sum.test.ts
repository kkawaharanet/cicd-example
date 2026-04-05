import { describe, expect, test } from "vitest";
import { sum } from "./sum.js";

describe("sum", () => {
  test("足し算ができること", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
