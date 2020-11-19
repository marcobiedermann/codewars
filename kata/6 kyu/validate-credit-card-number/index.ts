function isEven(n: number): boolean {
  return n % 2 === 0;
}

function validate(n: number): boolean {
  const stringified = n.toString();
  const { length } = stringified;
  let sum = 0;

  for (let i = 0; i < length; i += 1) {
    let value = parseInt(stringified[length - 1 - i], 10);

    if (!isEven(i)) {
      value *= 2;
    }

    if (value > 9) {
      value -= 9;
    }

    sum += value;
  }

  return sum % 10 === 0;
}

export default validate;
