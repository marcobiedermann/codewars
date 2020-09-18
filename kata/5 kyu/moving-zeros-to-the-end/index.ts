function isZero(n: number): boolean {
  return n === 0;
}

function moveZeros(arr: number[]): number[] {
  const zeros: number[] = [];
  const nonZeros: number[] = [];

  arr.forEach((number) => {
    if (isZero(number)) {
      zeros.push(number);
    } else {
      nonZeros.push(number);
    }
  });

  return [...nonZeros, ...zeros];
}

export default moveZeros;
