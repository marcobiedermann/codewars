function pendulum(values: number[]): number[] {
  const result: number[] = [];

  values
    .sort((a, b) => a - b)
    .forEach((value, index) => {
      if (index % 2) {
        result.push(value);
      } else {
        result.unshift(value);
      }
    });

  return result;
}

export default pendulum;
