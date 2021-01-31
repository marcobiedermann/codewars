function intToDigits(int: number): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function disariumNumber(n: number): 'Disarium !!' | 'Not !!' {
  const digits = intToDigits(n);

  const sum = digits.reduce(
    (accumulator, currentValue, index) => accumulator + currentValue ** (index + 1),
    0,
  );

  if (sum !== n) {
    return 'Not !!';
  }

  return 'Disarium !!';
}

export default disariumNumber;
