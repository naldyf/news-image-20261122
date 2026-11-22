// Entry for make.fun news-image-20261122: "Sum up 22 November's world news in one image".
//
// The image (entry.png) is Noor's web-Gemini vintage newspaper front page,
// "The Global Chronicle", for Sunday 22 November 2026: a gothic nameplate,
// the date line, the huge headline "WORLD ON THE BRINK", and the day's six
// biggest stories as a cinematic painting at the centre — Iran striking US
// bases in Bahrain, the Trump–Xi–Putin summit in Shenzhen, Mexico capturing
// cartel boss El Chapo Isidro, the COP31 deadlock in Antalya, Russia hitting
// Kryvyi Rih and a cargo ship burning in the Baltic, and the FBI database
// hack — each with a numbered callout box, plus side columns and an
// "ALSO ON SUNDAY 22 NOVEMBER" list. Every fact was verified against the
// day's reporting (see ../analysis/facts-2026-11-22.md).
//
// This program's only job is to place that exact image at /output/entry.png.
// It reads the file and writes it back byte for byte, so two runs produce
// identical output, and it never touches the network.
//
// The competition caps hold by construction: the image this program copies is
// already 1024x1024 pixels and 390755 bytes, under the 1 MiB limit, and the
// program writes nothing else — no resize, no re-encode, no fetch.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
console.log(`wrote entry.png (${image.length} bytes) to ${outDir}`);
