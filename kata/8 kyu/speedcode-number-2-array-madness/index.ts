function arrayMadness(a: number[], b: number[]): boolean {
  return (
    a.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0) >
    b.reduce((accumulator, currentValue) => accumulator + currentValue ** 3, 0)
  );
}

export default arrayMadness;
