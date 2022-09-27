/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

class Dog {
  // eslint-disable-next-line no-useless-constructor
  constructor(private breed: string) {}

  // eslint-disable-next-line class-methods-use-this
  bark() {
    return 'Woof';
  }
}

const snoopy = new Dog('Beagle');
const scoobydoo = new Dog('Great Dane');

export { snoopy, scoobydoo };
