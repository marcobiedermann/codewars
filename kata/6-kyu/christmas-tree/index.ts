function christmasTree(height: number): string {
  const rows = height;
  const columns = height * 2 - 1;
  const midpoint = Math.floor((height * 2 - 1) / 2);
  const tree = [];

  for (let row = 0; row < rows; row += 1) {
    const level = [];

    for (let column = 0; column < columns; column += 1) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level.push('*');
      } else {
        level.push(' ');
      }
    }

    tree.push(level.join(''));
  }

  return tree.join('\n');
}

export default christmasTree;
