function mergeArrays(arr1: number[], arr2: number[]): number[] {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

export default mergeArrays;
