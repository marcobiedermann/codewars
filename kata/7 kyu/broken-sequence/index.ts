function subtract(a: number, b: number): number {
  return a - b;
}

function findMissingNumber(input: string): number {
  const sequence = input.split(' ').map(Number).sort(subtract);

  if (!input) {
    return 0;
  }

  if (sequence.some((element) => Number.isNaN(element))) {
    return 1;
  }

  for (let i = 0; i < sequence.length; i += 1) {
    if (sequence[i] !== i + 1) {
      return i + 1;
    }
  }

  return 0;
}

export default findMissingNumber;
