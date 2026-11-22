# One Day on Earth — 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/naldyf/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/naldyf/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A single image summing up the world's news of Sunday 22 November 2026,
entered in the [make.fun](https://make.fun) bounty
[news-image-20261122](https://make.fun/bounty/news-image-20261122).

The image is a vintage newspaper front page, "The Global Chronicle": a
gothic nameplate, the date line, and the huge headline "WORLD ON THE BRINK"
over a cinematic painting of the day's six biggest stories — Iran striking
US bases in Bahrain, the Trump–Xi–Putin summit in Shenzhen, Mexico
capturing cartel boss El Chapo Isidro, the COP31 climate talks deadlocked
in Antalya, Russia hitting Kryvyi Rih and a cargo ship burning in the
Baltic Sea, and the FBI criminal database being hacked. Each story has a
numbered callout box, with side columns and an "ALSO ON SUNDAY 22
NOVEMBER" list (Indonesia factory fire, EU–Indonesia trade deal, GTA 6's
record launch, Verstappen's Las Vegas win, Leeds beating Chelsea 4-1,
Wembanyama's 50 points). Every fact was verified against the day's
reporting (see `../analysis/facts-2026-11-22.md`).

## How it is built

`entry.png` is the finished image (1024×1024, under 1 MiB). `main.ts`
(Node 22, standard library only) copies it byte for byte to
`/output/entry.png`, so two runs produce identical output and the program
never touches the network.

## The day's stories (verified)

- Iran struck an industrial site in Bahrain and two oil tankers near the
  Strait of Hormuz; Iran's Revolutionary Guards claimed they targeted US
  bases, Bahrain says a civilian site was hit, no injuries.
- Trump, Xi and Putin met in Shenzhen and agreed to begin talks on nuclear
  risk reduction.
- Mexican special forces arrested cartel boss Fausto Isidro Meza Flores
  ("El Chapo Isidro", FBI's 10 most wanted) in Sinaloa; 11 killed in the
  violence that followed.
- COP31 in Antalya, Turkey entered a second day of overtime, ~200 nations
  still split over fossil fuels and funding.
- A Russian ballistic missile hit Kryvyi Rih (Zelenskyy's hometown),
  killing 2 and wounding dozens; a Russian cargo ship hit by drones in
  the Gulf of Finland caught fire, 16 crew evacuated.
- Trump confirmed a breach of the FBI's NCIC criminal database.
