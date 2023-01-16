function kebabize(str: string): string {
  return str
    .replace(/\d/g, '')
    .split(/(?=[A-Z])/g)
    .join('-')
    .toLowerCase();
}

export default kebabize;
