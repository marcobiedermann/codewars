function digitize(n: number): number[] {
  return n.toString().split('').reverse().map(Number);
}

export default digitize;
