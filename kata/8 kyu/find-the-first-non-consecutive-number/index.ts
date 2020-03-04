function firstNonConsecutive(arr: number[]): number | null {
  const [first] = arr;
  const result = arr.find((element, index) => element !== index + first);

  return result === undefined ? null : result;
}

export default firstNonConsecutive;
