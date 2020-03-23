function comp(array1: number[], array2: number[]): boolean {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  const sortedArray1 = array1.sort((a, b) => a - b);
  const sortedArray2 = array2.sort((a, b) => a - b);

  return sortedArray1
    .map((element) => element ** 2)
    .every((element, index) => element === sortedArray2[index]);
}

export default comp;
