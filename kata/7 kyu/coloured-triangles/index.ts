const colors = ['R', 'G', 'B'];

function triangle(row: string): string {
  const { length } = row;

  if (length === 1) {
    return row;
  }

  let result = '';

  for (let i = 0; i < length - 1; i += 1) {
    const current = row[i];
    const next = row[i + 1];

    if (current === next) {
      result += current;
    } else {
      result += colors.find((color) => color !== current && color !== next);
    }
  }

  return triangle(result);
}

export default triangle;
