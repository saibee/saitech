import { describe, it, expect } from "vitest";
import { projects, experiences } from "@/lib/data";

describe("data smoke", () => {
  it("has projects", () => {
    expect(projects.length).toBeGreaterThan(0);
  });
  it("has experiences", () => {
    expect(experiences.length).toBe(9);
  });
});
