function isSortedAndHow(array: number[]): string {
  const sortedAsc = [...array].sort((a, b) => a - b);
  const sortedDesc = [...array].sort((a, b) => b - a);

  if (JSON.stringify(array) === JSON.stringify(sortedAsc)) {
    return 'yes, ascending';
  }

  if (JSON.stringify(array) === JSON.stringify(sortedDesc)) {
    return 'yes, descending';
  }

  return 'no';
}

export default isSortedAndHow;
