function isDivisibleBy(a: number, b: number): boolean {
  return a % b === 0;
}

function caffeineBuzz(n: number): string {
  if (isDivisibleBy(n, 12)) {
    return 'CoffeeScript';
  }

  if (isDivisibleBy(n, 6)) {
    return 'JavaScript';
  }

  if (isDivisibleBy(n, 3)) {
    return 'Java';
  }

  return 'mocha_missing!';
}

export default caffeineBuzz;
