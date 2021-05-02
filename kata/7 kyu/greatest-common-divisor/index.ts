function mygcd(x: number, y: number): number {
  if (!y) {
    return x;
  }

  return mygcd(y, x % y);
}

export default mygcd;
