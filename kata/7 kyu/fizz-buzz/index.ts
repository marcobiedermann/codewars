function fizzbuzz(n: number): (number | 'FizzBuzz' | 'Fizz' | 'Buzz')[] {
  return Array.from({ length: n }, (_, i) => {
    const index = i + 1;

    if (index % 15 === 0) {
      return 'FizzBuzz';
    }

    if (index % 3 === 0) {
      return 'Fizz';
    }

    if (index % 5 === 0) {
      return 'Buzz';
    }

    return index;
  });
}

export default fizzbuzz;
