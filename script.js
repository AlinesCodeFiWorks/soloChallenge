/*User Story: Random Password Generator
As a USER,
I want to be able to generate a random password based on my preferences,
so that I can create a secure password easily.
Acceptance Criteria:
  WHEN I am prompted,
  THEN I can select how many characters I want my password to be.
  WHEN I am prompted,
  THEN I can select if I want uppercase letters included.
  WHEN I am prompted,
  THEN I can select if I want numbers included.
  WHEN I am prompted,
  THEN I can select if I want special characters included.
  WHEN I have finished answering the prompts,
  THEN I can click "Submit."
FINALLY,
I will be presented with my randomly generated password.
Good Luck!!*/

//random number generator
function generateNumber(selection) {
  let randomNumber = Math.floor(Math.random() * selection);
  return randomNumber;
}

//character database
const lowerCase = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
};

const upperCase = {
  27: "A",
  28: "B",
  29: "C",
  30: "D",
  31: "E",
  32: "F",
  33: "G",
  34: "H",
  35: "I",
  36: "J",
  37: "K",
  38: "L",
  39: "M",
  40: "N",
  41: "O",
  42: "P",
  43: "Q",
  44: "R",
  45: "S",
  46: "T",
  47: "U",
  48: "V",
  49: "W",
  50: "X",
  51: "Y",
  52: "Z",
};

const num = {
  53: 1,
  54: 2,
  55: 3,
  56: 4,
  57: 5,
  58: 6,
  59: 7,
  60: 8,
  61: 9,
};

const specialChar = {
  62: "!",
  63: "@",
  64: "#",
  65: "$",
  66: "%",
  67: "^",
  68: "&",
  69: "*",
  70: "?",
};
