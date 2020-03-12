function superSize(num: number): number {
  return Number(
    num
      .toString()
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join(''),
  );
}

export default superSize;
