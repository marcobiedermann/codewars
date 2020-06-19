const v1 = 50;
const v2 = 100;
const v3 = 150;
const v4 = 200;
const v5 = 2;
const v6 = 250;

function equal1(): number {
  const a = v1;
  const b = v1;

  return a + b;
}

function equal2(): number {
  const a = v3;
  const b = v1;

  return a - b;
}

function equal3(): number {
  const a = v1;
  const b = v5;

  return a * b;
}

function equal4(): number {
  const a = v4;
  const b = v5;

  return a / b;
}

function equal5(): number {
  const a = v2;
  const b = v6;

  return a % b;
}

export { equal1, equal2, equal3, equal4, equal5 };
