function potatoes(p0: number, w0: number, p1: number): number {
  return Math.floor((w0 * (100 - p0)) / (100 - p1));
}

export default potatoes;
