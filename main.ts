// Entry for make.fun news-image-20261122: "Sum up 22 November's world news in one image".
//
// The image (entry.png) is Noor's web-Gemini vintage newspaper front page,
// "The Global Chronicle", for Sunday 22 November 2026. A gothic nameplate
// sits above the date line "SUNDAY, NOVEMBER 22, 2026" (VOL. CXXVI....
// NO. 320, Price: $4.50), then the huge headline "WORLD ON THE BRINK" with
// the sub-headline "SIX SIMULTANEOUS CRISES SHATTER INTERNATIONAL CALM ON
// SUNDAY". At the centre is a cinematic painting of a glowing Earth globe
// ringed by the day's six biggest stories — Iran striking US bases in
// Bahrain, the Trump–Xi–Putin summit in Shenzhen, Mexico capturing cartel
// boss El Chapo Isidro, the COP31 deadlock in Antalya, Russia hitting
// Kryvyi Rih and a cargo ship burning in the Baltic, and the FBI database
// hack — each with a numbered callout box (1. Strait of Hormuz, 2. Shenzhen
// Summit, 3. Sinaloa Raids, 4. Antalya Deadlock, 5. European Conflicts,
// 6. Cyber Security Breach). Side columns carry "RAIDS IN SINALOA" and
// "SHENZHEN DEBATES", and the foot lists six more stories under "ALSO ON
// SUNDAY 22 NOVEMBER": the Indonesia factory fire (3 killed), the
// EU–Indonesia trade deal, the GTA 6 record launch ($3.79B), Verstappen
// winning the Las Vegas GP, Leeds beating Chelsea 4-1, and Wembanyama
// scoring 50 points. Every fact was verified against the day's reporting
// (see ../analysis/facts-2026-11-22.md); the "west of Jakarta" detail on
// the factory fire checks out against Reuters (Cikande, Serang, ~50 km
// west of Jakarta).
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
