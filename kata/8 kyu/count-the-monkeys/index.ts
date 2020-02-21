function monkeyCount(n: number): number[] {
  return Array.from({ length: n }, (_, index) => index + 1);
}

export default monkeyCount;
