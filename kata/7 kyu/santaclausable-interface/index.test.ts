import { expect } from 'vitest';
import isSantaClausable from '.';

describe('isSantaClausable', () => {
  it('should check if object implemented the `santa` interface', () => {
    const santa = {
      sayHoHoHo() {
        console.log('Ho Ho Ho!');
      },
      distributeGifts() {
        console.log('Gifts for all!');
      },
      goDownTheChimney() {
        console.log('*whoosh*');
      },
    };

    const notSanta = {
      sayHoHoHo() {
        console.log('Oink Oink!');
      },
      // no distributeGifts() and no goDownTheChimney()
    };

    expect(isSantaClausable(santa)).toBe(true);
    expect(isSantaClausable(notSanta)).toBe(false);
  });
});
