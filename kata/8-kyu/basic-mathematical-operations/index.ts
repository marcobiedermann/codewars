type Operation = "+" | "-" | "*" | "/";

function basicOp(operation: Operation, value1: number, value2: number): number {
  switch (operation) {
    case "+":
      return value1 + value2;

    case "-":
      return value1 - value2;

    case "*":
      return value1 * value2;

    case "/":
      return value1 / value2;

    default:
      return 0;
  }
}

export default basicOp;
