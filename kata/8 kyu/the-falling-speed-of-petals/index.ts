function sakuraFall(v: number): number {
  const height = 400;

  if (v <= 0) {
    return 0;
  }

  return height / v;
}

export default sakuraFall;
