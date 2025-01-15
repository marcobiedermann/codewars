const letters = {
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

type Letter = keyof typeof letters;

function solution(num: number): string {
  let roman = '';
  let i: Letter;

  for (i in letters) {
    while (num >= letters[i]) {
      roman += i;
      num -= letters[i];
    }
  }

  return roman;
}

export default solution;
