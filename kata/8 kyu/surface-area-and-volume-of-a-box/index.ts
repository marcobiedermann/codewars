function getSize(width: number, height: number, depth: number): [number, number] {
  const area = 2 * width * height + 2 * width * depth + 2 * height * depth;
  const volume = width * height * depth;

  return [area, volume];
}

export default getSize;
