import { describe, expect, it } from 'vitest';
import vowelIndices from './index.ts';

describe('vowelIndices', () => {
  it('should return list of vowel indices', () => {
    expect.assertions(5);

    expect(vowelIndices('mmm')).toStrictEqual([]);
    expect(vowelIndices('apple')).toStrictEqual([1, 5]);
    expect(vowelIndices('super')).toStrictEqual([2, 4]);
    expect(vowelIndices('orange')).toStrictEqual([1, 3, 6]);
    expect(vowelIndices('supercalifragilisticexpialidocious')).toStrictEqual([
      2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33,
    ]);
  });
});
