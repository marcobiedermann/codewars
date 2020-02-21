function sumArr(arr: number[]): number {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function findEvenIndex(arr: number[]): number {
  return arr.findIndex((_, index) => {
    const leftSum = sumArr(arr.slice(0, index));
    const rightSum = sumArr(arr.slice(index + 1));

    return leftSum === rightSum;
  });
}

export default findEvenIndex;
