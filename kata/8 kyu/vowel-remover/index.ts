function shortcut(string: string): string {
  return string.replace(/[aeiou]/g, '');
}

export default shortcut;
