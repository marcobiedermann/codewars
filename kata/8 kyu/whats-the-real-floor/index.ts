function getRealFloor(n: number): number {
  if (n >= 13) {
    return n - 2;
  }

  if (n > 0) {
    return n - 1;
  }

  return n;
}

export default getRealFloor;
