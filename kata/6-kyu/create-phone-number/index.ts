function createPhoneNumber(numbers: number[]): string {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/g, '($1) $2-$3');
}

export default createPhoneNumber;
