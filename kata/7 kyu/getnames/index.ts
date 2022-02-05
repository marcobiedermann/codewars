interface Person {
  name: string;
  age: number;
}

function getNames(data: Person[]): string[] {
  return data.map((item) => item.name);
}

export default getNames;
