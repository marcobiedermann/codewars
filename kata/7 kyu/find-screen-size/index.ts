function findScreenHeight(width: number, ratio: string): string {
  const [w, h] = ratio.split(':').map((value) => parseInt(value, 10));
  const height = width / (w / h);

  return `${width}x${height}`;
}

export default findScreenHeight;
