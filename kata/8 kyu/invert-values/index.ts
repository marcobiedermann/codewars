function invert(array: number[]): number[] {
  return array.map((element) => (Math.abs(element) > 0 ? element * -1 : element));
}

export default invert;
