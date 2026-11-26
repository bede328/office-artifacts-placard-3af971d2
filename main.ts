import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Rubber stamp, c. 1974. Oak and vulcanized rubber, bequest of D. Alvarez. Pressed once to approve; pressed twice to make it true.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
