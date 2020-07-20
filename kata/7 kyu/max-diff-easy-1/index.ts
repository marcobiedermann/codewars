function maxDiff(list: number[]): number {
  if (!list.length) {
    return 0;
  }

  return Math.max(...list) - Math.min(...list);
}

export default maxDiff;
