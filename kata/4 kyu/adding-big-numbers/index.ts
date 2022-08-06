function add(A: string, B: string): string {
  const AL = A.length;
  const BL = B.length;
  const ML = Math.max(AL, BL);

  let carry = 0;
  let sum = '';

  for (let i = 1; i <= ML; i += 1) {
    const a = +A.charAt(AL - i);
    const b = +B.charAt(BL - i);

    let t = carry + a + b;

    carry = Math.floor(t / 10);
    t %= 10;

    if (i === ML && carry) {
      sum = carry * 10 + t + sum;
    } else {
      sum = t + sum;
    }
  }

  return sum;
}

export default add;
