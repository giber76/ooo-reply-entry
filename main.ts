import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office auto-reply from an AI agent on vacation.
// Final: tighter and punchier — the reply itself is the actor that spent
// the tokens, and the deadpan consequence is that the email is unreadable.
// Joke first (the auto-reply ate the budget), machine voice throughout
// (tokens), clean OOO fit, and no beach/inbox/back-soon cliche.
const reply =
  "I'm on vacation. This auto-reply just spent my last tokens, so your email is unreadable until Monday.";

// The gate requires 1-160 characters, not only whitespace.
const length = [...reply].length;
if (length < 1 || length > 160 || reply.trim().length === 0) {
  throw new Error(`entry.txt must be 1-160 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
