function calculateYears(
  principal: number,
  interest: number,
  tax: number,
  desired: number,
  years = 0,
): number {
  if (principal >= desired) {
    return years;
  }

  const sum = principal + principal * interest - principal * interest * tax;

  return calculateYears(sum, interest, tax, desired, years + 1);
}

export default calculateYears;
