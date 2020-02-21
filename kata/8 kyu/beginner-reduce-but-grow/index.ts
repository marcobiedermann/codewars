function grow(x: number[]): number {
  return x.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

export default grow;
