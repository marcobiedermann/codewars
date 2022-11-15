class Animal {
  public name: string;

  public type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

export default Animal;
