function last<T>(...list: T[] | T[][]): T {
  const lastElement: any = list[list.length - 1];

  return lastElement[lastElement.length - 1] || lastElement;
}

export default last;
