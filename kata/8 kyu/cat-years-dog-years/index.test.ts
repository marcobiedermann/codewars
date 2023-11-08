import { describe, expect, it } from 'vitest';
import humanYearsCatYearsDogYears from '.';

describe('humanYearsCatYearsDogYears', () => {
  it('should human years in cat and dog years', () => {
    expect.assertions(3);

    expect(humanYearsCatYearsDogYears(1)).toStrictEqual([1, 15, 15]);
    expect(humanYearsCatYearsDogYears(2)).toStrictEqual([2, 24, 24]);
    expect(humanYearsCatYearsDogYears(10)).toStrictEqual([10, 56, 64]);
  });
});
