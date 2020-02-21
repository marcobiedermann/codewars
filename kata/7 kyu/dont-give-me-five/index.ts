function dontGiveMeFive(start: number, end: number): number {
  let count = 0;

  for (let i = start; i <= end; i += 1) {
    if (!i.toString().includes('5')) {
      count += 1;
    }
  }

  return count;
}

export default dontGiveMeFive;
