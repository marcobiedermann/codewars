import { describe, expect, it } from 'vitest';
import number from './index.ts';

describe('number', () => {
  it('should prepend lines by line number', () => {
    expect.assertions(2);

    expect(number([])).toStrictEqual([]);
    expect(number(['a', 'b', 'c'])).toStrictEqual(['1: a', '2: b', '3: c']);
  });
});
