function alphanumeric(string: string): boolean {
  return /^[a-z0-9]+$/i.test(string);
}

export default alphanumeric;
