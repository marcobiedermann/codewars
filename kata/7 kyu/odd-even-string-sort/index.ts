function isEven(n: number): boolean {
  return n % 2 === 0;
}

function sortMyString(S: string): string {
  let even = '';
  let odd = '';

  for (let i = 0; i < S.length; i += 1) {
    const character = S[i];

    if (isEven(i)) {
      even += character;
    } else {
      odd += character;
    }
  }

  return `${even} ${odd}`;
}

export default sortMyString;
