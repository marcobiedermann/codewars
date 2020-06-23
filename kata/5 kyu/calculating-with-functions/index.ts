function zero(operation?: (a: number) => number): number {
  return operation ? operation(0) : 0;
}

function one(operation?: (a: number) => number): number {
  return operation ? operation(1) : 1;
}
function two(operation?: (a: number) => number): number {
  return operation ? operation(2) : 2;
}

function three(operation?: (a: number) => number): number {
  return operation ? operation(3) : 3;
}

function four(operation?: (a: number) => number): number {
  return operation ? operation(4) : 4;
}

function five(operation?: (a: number) => number): number {
  return operation ? operation(5) : 5;
}

function six(operation?: (a: number) => number): number {
  return operation ? operation(6) : 6;
}

function seven(operation?: (a: number) => number): number {
  return operation ? operation(7) : 7;
}

function eight(operation?: (a: number) => number): number {
  return operation ? operation(8) : 8;
}

function nine(operation?: (a: number) => number): number {
  return operation ? operation(9) : 9;
}

function plus(a: number): (b: number) => number {
  return (b: number): number => b + a;
}

function minus(a: number): (b: number) => number {
  return (b: number): number => b - a;
}

function times(a: number): (b: number) => number {
  return (b: number): number => b * a;
}

function dividedBy(a: number): (b: number) => number {
  return (b: number): number => Math.floor(b / a);
}

export {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
};
