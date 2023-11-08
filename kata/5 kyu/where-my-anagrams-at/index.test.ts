import { describe, expect, it } from 'vitest';
import anagrams from '.';

describe('anagrams', () => {
  it('should find all anagrams of a word from a list', () => {
    expect.assertions(3);

    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toStrictEqual(['aabb', 'bbaa']);
    expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toStrictEqual([
      'carer',
      'racer',
    ]);
    expect(anagrams('laser', ['lazing', 'lazy', 'lacer'])).toStrictEqual([]);
  });
});
