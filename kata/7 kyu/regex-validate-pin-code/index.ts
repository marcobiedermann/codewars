function validatePIN(pin: string): boolean {
  return /^(?=\d*$)(?:.{4}|.{6})$/.test(pin);
}

export default validatePIN;
