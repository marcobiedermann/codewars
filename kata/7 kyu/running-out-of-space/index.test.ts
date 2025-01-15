import assert from 'assert';
import { describe, it } from 'node:test';
import spacey from './index.ts';

describe('spacey', () => {
  it('should return an array showing the space decreasing', () => {
    assert.deepEqual(spacey(['kevin', 'has', 'no', 'space']), [
      'kevin',
      'kevinhas',
      'kevinhasno',
      'kevinhasnospace',
    ]);
    assert.deepEqual(spacey(['this', 'cheese', 'has', 'no', 'holes']), [
      'this',
      'thischeese',
      'thischeesehas',
      'thischeesehasno',
      'thischeesehasnoholes',
    ]);
  });
});
