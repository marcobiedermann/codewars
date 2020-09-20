function uniqueInOrder<T>(iterable: string | T[]): (string | T)[] {
  return [...iterable].filter((item, index) => item !== iterable[index - 1]);
}

export default uniqueInOrder;
