function isDivisible(wallLength: number, pixelSize: number): boolean {
  return wallLength % pixelSize === 0;
}

export default isDivisible;
