function seven(m: number): [number, number] {
  let result = m;
  let steps = 0;

  while (result > 99) {
    const last = result % 10;
    const rest = Math.floor(result / 10);

    result = rest - 2 * last;

    steps += 1;
  }

  return [result, steps];
}

export default seven;
