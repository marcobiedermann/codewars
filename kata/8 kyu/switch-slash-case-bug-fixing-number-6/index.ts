interface Value {
  a: number;
  b: number;
  operation: string;
}

function evalObject(value: Value): number {
  switch (value.operation) {
    case '+':
      return value.a + value.b;
    case '-':
      return value.a - value.b;
    case '/':
      return value.a / value.b;
    case '*':
      return value.a * value.b;
    case '%':
      return value.a % value.b;
    case '^':
      return value.a ** value.b;
    default:
      throw new Error('Unsupported Operator');
  }
}

export default evalObject;
