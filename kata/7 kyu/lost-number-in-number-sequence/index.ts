function findDeletedNumber(arr: number[], mixArr: number[]): number {
  const set = new Set(mixArr);
  const lostNumber = arr.find((item) => !set.has(item));

  if (!lostNumber) {
    return 0;
  }

  return lostNumber;
}

export default findDeletedNumber;
