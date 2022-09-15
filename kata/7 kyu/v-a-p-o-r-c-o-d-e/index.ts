function vaporcode(string: string): string {
  return string.toUpperCase().replace(/\s+/g, '').split('').join('  ');
}

export default vaporcode;
