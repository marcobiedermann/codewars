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

function isDigit(character: string): boolean {
  return /\d/.test(character);
}

interface Operations {
  [key: string]: (a: number, b: number) => number;
}

const operations: Operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

function calc(expr: string): number {
  const literals: number[] = [];
  const tokens = expr.split(/\s/g);

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];

    if (isDigit(token)) {
      literals.push(parseFloat(token));
    } else {
      const a = literals.pop();
      const b = literals.pop();

      if (!a || !b) {
        return 0;
      }

      literals.push(operations[token](b, a));
    }
  }

  return literals.pop() || 0;
}

export default calc;
