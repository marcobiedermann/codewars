function add(a: number): (b: number) => number {
  return (b: number): number => a + b;
}

export default add;
