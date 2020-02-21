function partlist(arr: string[]): string[][] {
  return Array.from({ length: arr.length - 1 }, (_, index) => [
    arr.slice(0, index + 1).join(' '),
    arr.slice(index + 1).join(' '),
  ]);
}

export default partlist;
