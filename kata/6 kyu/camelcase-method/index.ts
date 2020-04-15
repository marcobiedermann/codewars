function capitalize(str: string): string {
  const first = str.slice(0, 1);
  const rest = str.slice(1);

  return first.toUpperCase() + rest.toLocaleLowerCase();
}

function camelCase(str: string): string {
  return str.split(' ').map(capitalize).join('');
}

export default camelCase;
