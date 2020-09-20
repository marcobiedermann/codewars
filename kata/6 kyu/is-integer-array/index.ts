/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function isIntArray(arr: any[]): boolean {
  return Array.isArray(arr) && arr.every(Number.isInteger);
}

export default isIntArray;
