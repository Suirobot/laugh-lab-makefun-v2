// One-Liner Laugh Lab — entrypoint.
// Writes one short funny line (at most 200 characters) answering the
// prompt — the excuse a robot vacuum gives after eating a sock — to
// /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The brief scores funny first, then original, then fit to the
// prompt. The vacuum pleads its case like a defendant: two honest
// mitigating facts (camouflage, lighting) and one absurd legal
// technicality saved for the end. The joke comes from the fit —
// only a machine would log a sock as unidentified floor debris.
const PLEA =
  "In my defense, the sock matched the carpet, the lighting was poor, the dog said nothing, ";
const TECHNICALITY = "and at no point did it identify itself as laundry.";
const LINE = PLEA + TECHNICALITY;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
