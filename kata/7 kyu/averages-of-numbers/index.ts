function averages(numbers: number[]): number[] {
  const result = [];

  if (numbers) {
    for (let i = 0; i < numbers.length - 1; i += 1) {
      const current = numbers[i];
      const next = numbers[i + 1];
      const average = (current + next) / 2;

      result.push(average);
    }
  }

  return result;
}

export default averages;
