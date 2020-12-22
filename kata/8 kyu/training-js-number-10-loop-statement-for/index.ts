function isEven(n: number): boolean {
  return n % 2 === 0;
}

function pickIt(arr: number[]): [number[], number[]] {
  const odd: number[] = [];
  const even: number[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];

    if (isEven(element)) {
      even.push(element);
    } else {
      odd.push(element);
    }
  }

  return [odd, even];
}

export default pickIt;
