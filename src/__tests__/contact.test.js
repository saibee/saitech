import { describe, it, expect } from "vitest";
import { POST } from "@/app/api/contact/route";

async function call(body) {
  const req = new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  return POST(req);
}

describe("POST /api/contact", () => {
  it("rejects missing fields", async () => {
    const res = await call({ name: "", email: "a@b.com", message: "hello world test" });
    expect(res.status).toBe(400);
  });
  it("rejects invalid email", async () => {
    const res = await call({ name: "Sam", email: "bad", message: "hello world test message" });
    expect(res.status).toBe(400);
  });
  it("accepts valid payload", async () => {
    const res = await call({ name: "Sam", email: "sam@example.com", message: "Hello, this is a valid test message for portfolio." });
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.message).toMatch(/Thanks/);
  });
});
