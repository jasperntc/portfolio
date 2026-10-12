import { describe, expect, it } from "vitest";
import { formatMonth, formatRange } from "../lib/dates";

describe("formatMonth", () => {
  it("formats YYYY-MM", () => {
    expect(formatMonth("2023-07")).toBe("Jul 2023");
    expect(formatMonth("2020-12")).toBe("Dec 2020");
  });

  it("rejects bad input", () => {
    expect(() => formatMonth("2023-7")).toThrow();
    expect(() => formatMonth("2023-13")).toThrow();
    expect(() => formatMonth("2023-00")).toThrow();
  });
});

describe("formatRange", () => {
  it("shows Present for a current role", () => {
    expect(formatRange("2023-04", null)).toBe("Apr 2023 – Present");
  });

  it("shows both ends", () => {
    expect(formatRange("2023-07", "2026-03")).toBe("Jul 2023 – Mar 2026");
  });
});
