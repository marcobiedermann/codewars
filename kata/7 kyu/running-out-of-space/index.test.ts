import { describe, expect, it } from 'vitest';
import spacey from '.';

describe('spacey', () => {
  it('should return an array showing the space decreasing', () => {
    expect.assertions(2);

    expect(spacey(['kevin', 'has', 'no', 'space'])).toStrictEqual([
      'kevin',
      'kevinhas',
      'kevinhasno',
      'kevinhasnospace',
    ]);
    expect(spacey(['this', 'cheese', 'has', 'no', 'holes'])).toStrictEqual([
      'this',
      'thischeese',
      'thischeesehas',
      'thischeesehasno',
      'thischeesehasnoholes',
    ]);
  });
});
