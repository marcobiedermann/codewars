function validateCode(code: number): boolean {
  return /^[123]/.test(code.toString());
}

export default validateCode;
