function subtract(a: number, b: number): number {
  return a - b;
}

function comp(array1: number[] | null, array2: number[] | null): boolean {
  if (!array1 || !array2) {
    return false;
  }

  const sortedArray1 = array1.sort(subtract);
  const sortedArray2 = array2.sort(subtract);

  return sortedArray1.every((element, index) => element ** 2 === sortedArray2[index]);
}

export default comp;
