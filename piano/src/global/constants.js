const VALID_BLACK_KEYS = ["w", "e", "t", "y", "u"];
const VALID_WHITE_KEYS = ["a", "s", "d", "f", "g", "h", "j", "k"];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
const NOTES = [
  "do",
  "do#",
  "re",
  "re#",
  "mi",
  "fa",
  "fa#",
  "sol",
  "sol#",
  "la",
  "la#",
  "si",
  "do",
];
const NOTE_TO_KEY = {
  c: "a",
  df: "w",
  d: "s",
  ef: "e",
  e: "d",
  f: "f",
  gf: "t",
  g: "g",
  af: "y",
  a: "h",
  bf: "u",
  b: "j",
  ca: "k",
};
const KEY_TO_NOTE = {
  a: "c",
  w: "df",
  s: "d",
  e: "ef",
  d: "e",
  f: "f",
  t: "gf",
  g: "g",
  y: "af",
  h: "a",
  u: "bf",
  j: "b",
  k: "ca",
};
export { NOTES, VALID_KEYS, NOTE_TO_KEY, KEY_TO_NOTE };
