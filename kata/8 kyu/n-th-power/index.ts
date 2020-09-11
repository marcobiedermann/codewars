function index(array: number[], n: number): number {
  if (array.length <= n) {
    return -1;
  }

  return array[n] ** n;
}

export default index;
