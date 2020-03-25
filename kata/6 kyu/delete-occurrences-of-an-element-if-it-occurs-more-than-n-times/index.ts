function deleteNth(arr: number[], n: number): number[] {
  const count = new Map();

  return arr.filter((number) => {
    count.set(number, count.get(number) + 1 || 1);

    return count.get(number) <= n;
  });
}

export default deleteNth;
