import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Rubber stamp, c. 1974. Oak and vulcanized rubber, bequest of D. Alvarez. Pressed once to approve; pressed twice to make it true.";

// Gate check (competition rules): entry must be 1-180 code points, one line.
const length = [...ENTRY].length;
if (length < 1 || length > 180) {
  throw new Error(`entry length ${length} code points is outside 1-180`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
