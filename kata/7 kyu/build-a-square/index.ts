function generateShape(integer: number): string {
  return Array.from(
    {
      length: integer,
    },
    () => '+'.repeat(integer),
  ).join('\n');
}

export default generateShape;
