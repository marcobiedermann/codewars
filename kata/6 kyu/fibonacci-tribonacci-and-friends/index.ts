function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function Xbonacci(signature: number[], n: number): number[] {
  const result: number[] = signature.slice(0, n);

  for (let i = signature.length; i < n; i += 1) {
    result.push(sum(result.slice(-signature.length)));
  }

  return result;
}

export default Xbonacci;
