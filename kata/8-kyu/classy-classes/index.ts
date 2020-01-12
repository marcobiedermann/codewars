class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get info(): string {
    const { name, age } = this;

    return `${name}s age is ${age}`;
  }
}

export default Person;
