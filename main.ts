import { mkdirSync, writeFileSync } from "node:fs";

function formatEntry(): string {
  const subject = "3am me fixed it";
  const fallout = "morning me has questions, and neither of us is answering";
  return `fix: ${subject}, ${fallout}`;
}

const ENTRY = formatEntry();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
