class Dog {
  private breed: string;

  constructor(breed: string) {
    this.breed = breed;
  }

  bark() {
    return 'Woof';
  }
}

const snoopy = new Dog('Beagle');
const scoobydoo = new Dog('Great Dane');

export { scoobydoo, snoopy };
