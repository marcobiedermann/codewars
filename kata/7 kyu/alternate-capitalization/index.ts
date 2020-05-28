function isEven(n: number): boolean {
  return n % 2 === 0;
}

function capitalize(s: string): [string, string] {
  const { length } = s;
  let even = '';
  let odd = '';

  for (let i = 0; i < length; i += 1) {
    const current = s[i];

    if (isEven(i)) {
      even += current.toUpperCase();
      odd += current;
    } else {
      even += current;
      odd += current.toUpperCase();
    }
  }

  return [even, odd];
}

export default capitalize;
