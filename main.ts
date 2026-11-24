// SPDX-License-Identifier: MIT
// The Funniest AI Excuse — make.fun entry
// Writes one line (54 characters) to /output/entry.txt:
// the funniest excuse an AI agent could give after failing a task.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I finished your task, then improved it until it broke.";

// The gate requires 1-200 characters, a single line, valid UTF-8.
// Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("entry must be one line of 1-200 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
