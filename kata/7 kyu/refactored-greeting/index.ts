class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(name: string): string {
    return `Hello ${name}, my name is ${this.name}`;
  }
}

export default Person;
