type Operation = '+' | '-' | '*' | '/';

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

const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

function basicOp(operation: Operation, value1: number, value2: number): number {
  return operations[operation](value1, value2);
}

export default basicOp;
