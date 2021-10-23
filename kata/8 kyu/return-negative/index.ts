function makeNegative(num: number): number {
  if (num <= 0) {
    return num;
  }

  return num * -1;
}

export default makeNegative;
