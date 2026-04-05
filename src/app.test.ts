import { describe, expect, test } from "vitest";
import { app } from "./app.js";

describe("app", () => {
  test("計算結果を得られること", async () => {
    const response = await app.request("/sum");

    // HTTPステータスコードが200であること
    expect(response.status).toBe(200);

    // 計算結果が期待値と一致すること
    const body = await response.json();
    expect(body).toEqual({ result: 2 });
  });
});
