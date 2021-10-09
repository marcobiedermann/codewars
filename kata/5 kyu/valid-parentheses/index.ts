function validParentheses(parens: string): boolean {
  return ![...parens].reduce(
    (accumulator, currentValue) => Math.abs(accumulator) + (currentValue === '(' ? 1 : -1),
    0,
  );
}

export default validParentheses;
