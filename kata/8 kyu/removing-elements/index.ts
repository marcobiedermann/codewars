function removeEveryOther<T>(arr: T[]): T[] {
  const arrLength = arr.length;
  const result = [];

  for (let i = 0; i < arrLength; i += 2) {
    result.push(arr[i]);
  }

  return result;
}

export default removeEveryOther;
