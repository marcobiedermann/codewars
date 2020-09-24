function calculator(a: unknown, b: unknown, sign: string): number | 'unknown value' {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'unknown value';
  }

  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 'unknown value';
  }
}

export default calculator;
