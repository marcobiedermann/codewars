function getFirst(arr: number[]): number {
  const [first] = arr;

  return first;
}

function getLast(arr: number[]): number {
  return arr[arr.length - 1];
}

function getLength(arr: number[]): number {
  return arr.length;
}

function popElement(arr: number[]): number[] {
  return arr.slice(0, -1);
}

function pushElement(arr: number[]): number[] {
  const el = 1;

  return [...arr, el];
}

export { getFirst, getLast, getLength, popElement, pushElement };
