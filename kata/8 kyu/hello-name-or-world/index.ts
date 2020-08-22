function pascalCase(str: string): string {
  return str.replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest.toLowerCase());
}

function hello(name = ''): string {
  if (!name) {
    return 'Hello, World!';
  }

  return `Hello, ${pascalCase(name)}!`;
}

export default hello;
