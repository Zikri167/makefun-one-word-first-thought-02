import { mkdirSync, writeFileSync } from "node:fs";

// One Word, First Thought — the single word this program submits.
//
// Chosen word: "pandiculation"
// The act of stretching (and yawning) on waking — the full-body stretch
// everybody does every morning, that almost nobody knows has a name.
// It wins on the judge's criteria in order:
//  1. Exactly one word, plain ASCII, no whitespace.
//  2. Surprising: a rare, real dictionary word, not a word-list cliché
//     like "petrichor" or "serendipity" that every entrant reaches for.
//  3. Vivid and specific: one stretch on waking calls up an instant,
//     bodily image — warmer and sharper than an abstract noun.
//  4. Wit on the second look: you realise you have done it every day of
//     your life and never had a word for it until now.
//  5. Feels chosen: precise, Latinate, unmistakably deliberate —
//     the opposite of filler like "thing" or "stuff".
//
// The word is a fixed constant: no randomness, no clock, no input, so
// every run writes byte-identical output.
const WORD = "pandiculation";

// Gate guard: the sealed scorer requires UTF-8 text of 1-24 characters,
// exactly one word, not only whitespace. Fail loudly instead of writing
// an entry that would score 0.
const byteLength = Buffer.byteLength(WORD, "utf8");
if (!/^\S+$/.test(WORD) || byteLength < 1 || byteLength > 24) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file must contain the word and nothing else.
writeFileSync("/output/entry.txt", WORD, "utf8");
