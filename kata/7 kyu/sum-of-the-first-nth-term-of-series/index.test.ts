import { describe, expect, it } from 'vitest';
import SeriesSum from '.';

describe('seriesSum', () => {
  it('should sum series up to nth term', () => {
    expect.assertions(4);

    expect(SeriesSum(1)).toBe('1.00');
    expect(SeriesSum(2)).toBe('1.25');
    expect(SeriesSum(3)).toBe('1.39');
    expect(SeriesSum(4)).toBe('1.49');
  });
});
