function printerError(s: string): string {
  const errors = s.match(/[^a-m]/gi) || [];

  return `${errors.length}/${s.length}`;
}

export default printerError;
