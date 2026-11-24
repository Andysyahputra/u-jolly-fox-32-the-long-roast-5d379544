// The Long Roast — entry program (program/v1).
// Writes one original roast line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// No dependencies, no network, deterministic output.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  'My agent runs on a VM so slow that "real-time" is just a rumor it heard once.';

// Gate check, mirroring the competition gate: 1-200 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-whitespace characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", { encoding: "utf8" });
