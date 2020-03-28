/* eslint-disable */

const symbols = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

type Symbol = keyof typeof symbols;

function solution(num: number): string {
  let roman = '';
  let i: Symbol;

  for (i in symbols) {
    while (num >= symbols[i]) {
      roman += i;
      num -= symbols[i];
    }
  }

  return roman;
}

export default solution;
