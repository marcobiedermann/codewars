function towerBuilder(nFloors: number): string[] {
  return Array.from({ length: nFloors }, (_, index) => {
    const spaces = ' '.repeat(nFloors - index - 1);

    return spaces + '*'.repeat(2 * index + 1) + spaces;
  });
}

export default towerBuilder;
