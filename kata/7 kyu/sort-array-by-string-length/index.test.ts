import { describe, expect, it } from 'vitest';
import sortByLength from './index.ts';

describe('sortByLength', () => {
  it('should sort strings by length', () => {
    expect.assertions(3);

    expect(sortByLength(['Beg', 'Life', 'I', 'To'])).toStrictEqual(['I', 'To', 'Beg', 'Life']);
    expect(sortByLength(['', 'Moderately', 'Brains', 'Pizza'])).toStrictEqual([
      '',
      'Pizza',
      'Brains',
      'Moderately',
    ]);
    expect(sortByLength(['Longer', 'Longest', 'Short'])).toStrictEqual([
      'Short',
      'Longer',
      'Longest',
    ]);
  });
});
