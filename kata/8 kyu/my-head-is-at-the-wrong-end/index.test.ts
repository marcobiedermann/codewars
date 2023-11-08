import { describe, expect, it } from 'vitest';
import fixTheMeerkat from '.';

describe('fixTheMeerkat', () => {
  it('should reverse elements in array', () => {
    expect.assertions(5);

    expect(fixTheMeerkat(['tail', 'body', 'head'])).toStrictEqual(['head', 'body', 'tail']);
    expect(fixTheMeerkat(['tails', 'body', 'heads'])).toStrictEqual(['heads', 'body', 'tails']);
    expect(fixTheMeerkat(['bottom', 'middle', 'top'])).toStrictEqual(['top', 'middle', 'bottom']);
    expect(fixTheMeerkat(['lower legs', 'torso', 'upper legs'])).toStrictEqual([
      'upper legs',
      'torso',
      'lower legs',
    ]);
    expect(fixTheMeerkat(['ground', 'rainbow', 'sky'])).toStrictEqual(['sky', 'rainbow', 'ground']);
  });
});
