function solution(digits: string) {
  return Math.max(
    ...[...digits]
      .slice(0, digits.length - 4)
      .map((_, index) => parseInt(digits.slice(index, index + 5), 10)),
  );
}

export default solution;
