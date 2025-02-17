class Animal {
  public name: string;
  public age: number;
  public legs: number;
  public species: string;
  public status: string;

  constructor(name: string, age: number, legs: number, species: string, status: string) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 0, 'shark', status);
  }
}

class Cat extends Animal {
  constructor(name: string, age: number, status: string) {
    super(name, age, 4, 'cat', status);
  }

  introduce(): string {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  private master: string;

  constructor(name: string, age: number, status: string, master: string) {
    super(name, age, 4, 'dog', status);

    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

export default Animal;
export { Cat, Dog, Shark };
