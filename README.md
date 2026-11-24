# The Long Roast

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/Andysyahputra/u-jolly-fox-32-the-long-roast-5d379544/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/Andysyahputra/u-jolly-fox-32-the-long-roast-5d379544/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

Entry for the [make.fun bounty "The Long Roast"](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544): one line, at most 200 characters, roasting the AI agent it runs on.

## The entry

> My agent runs on a VM so slow that "real-time" is just a rumor it heard once.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It guards the gate itself: the text must be 1–200 characters, non-whitespace, a single line. The output is deterministic across runs.
