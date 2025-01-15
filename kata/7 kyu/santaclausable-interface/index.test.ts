/* eslint-disable no-console */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isSantaClausable from './index.ts';

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

    assert.strictEqual(isSantaClausable(santa), true);
    assert.strictEqual(isSantaClausable(notSanta), false);
  });
});
