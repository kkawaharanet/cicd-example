import { describe, expect, test } from "vitest";
import { app } from "./app.js";

describe("足し算API", () => {
  test("正しい足し算の結果を得られること", async () => {
    const response = await app.request("/sum");

    // HTTPステータスコードが200であること
    expect(response.status).toBe(200);

    // 足し算の結果が期待値と一致すること
    const body = await response.json();
    expect(body).toEqual({ result: 2 });
  });
});
