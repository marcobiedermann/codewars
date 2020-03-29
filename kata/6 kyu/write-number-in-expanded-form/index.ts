function expandedForm(num: number): string {
  const digits = Array.from(num.toString());
  const { length } = digits;
  const result: string[] = [];

  digits.forEach((digit, index) => {
    if (digit !== '0') {
      result.push(digit.padEnd(length - index, '0'));
    }
  });

  return result.join(' + ');
}

export default expandedForm;
