function smallEnough(a: number[], limit: number): boolean {
  return a.every((value) => value <= limit);
}

export default smallEnough;
