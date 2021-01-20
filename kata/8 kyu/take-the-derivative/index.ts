function derive(coefficient: number, exponent: number): string {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

export default derive;
