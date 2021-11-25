function sumStrings(a: string, b: string): string {
  const sum = BigInt(a) + BigInt(b);

  return sum.toString();
}

export default sumStrings;
