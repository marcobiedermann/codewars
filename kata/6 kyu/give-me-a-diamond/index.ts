function isEven(n: number): boolean {
  return n % 2 === 0;
}

function diamond(n: number): string | null {
  if (isEven(n) || n < 0) {
    return null;
  }

  const middle = n / 2;
  let diam = '';

  for (let i = 0; i < n; i += 1) {
    if (i < middle) {
      diam += ' '.repeat(middle - i);
      diam += '*'.repeat(2 * i + 1);
    } else {
      diam += ' '.repeat(i - middle + 1);
      diam += '*'.repeat(2 * (n - i) - 1);
    }

    diam += '\n';
  }

  return diam;
}

export default diamond;
