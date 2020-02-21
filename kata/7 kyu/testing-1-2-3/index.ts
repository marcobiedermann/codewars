function number(array: string[]): string[] {
  return array.map((line, index) => `${index + 1}: ${line}`);
}

export default number;
