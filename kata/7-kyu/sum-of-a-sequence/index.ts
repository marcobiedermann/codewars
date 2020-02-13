function sequenceSum(begin: number, end: number, step: number): number {
  if (begin > end) {
    return 0;
  }

  return begin + sequenceSum(begin + step, end, step);
}

export default sequenceSum;
