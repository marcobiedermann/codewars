function removeSmallest(numbers: number[]): number[] {
  const min = Math.min(...numbers);
  const indexOf = numbers.indexOf(min);

  const left = numbers.slice(0, indexOf);
  const right = numbers.slice(indexOf + 1);

  return [...left, ...right];
}

export default removeSmallest;
