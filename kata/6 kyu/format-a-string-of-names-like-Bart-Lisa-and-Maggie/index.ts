interface Person {
  name: string;
}

function list(names: Person[]): string {
  return names
    .map(({ name }) => name)
    .join(', ')
    .replace(/(.*), (.*)/, '$1 & $2');
}

export default list;
