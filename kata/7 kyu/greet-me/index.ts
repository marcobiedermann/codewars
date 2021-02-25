function capitalize(str: string): string {
  const [first, ...rest] = str.toLowerCase();

  return `${first.toUpperCase()}${rest.join('')}`;
}

function greet(name: string): string {
  return `Hello ${capitalize(name)}!`;
}

export default greet;
