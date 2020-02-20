type Operator = 'add' | 'subtract' | 'multiply' | 'divide';

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const operators = {
  add,
  subtract,
  multiply,
  divide,
};

function arithmetic(a: number, b: number, operator: Operator): number {
  return operators[operator](a, b);
}

export default arithmetic;
