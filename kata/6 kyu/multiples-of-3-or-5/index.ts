function solution(number: number): number {
  let result = 0;

  for (let i = 1; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

export default solution;
