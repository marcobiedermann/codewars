function saleHotdogs(n: number): number {
  if (n < 5) {
    return n * 100;
  }

  if (n >= 5 && n < 10) {
    return n * 95;
  }

  return n * 90;
}

export default saleHotdogs;
