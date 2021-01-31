function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add);
}

function inviteMoreWomen(L: number[]): boolean {
  return sum(L) > 0;
}

export default inviteMoreWomen;
