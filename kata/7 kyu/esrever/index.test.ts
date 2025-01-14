import { describe, expect, it } from 'vitest';
import reverse from './index.ts';

describe('reverse', () => {
  it('should reverse a list', () => {
    expect.assertions(2);

    expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
    expect(reverse([1, null, 14, 'two'])).toStrictEqual(['two', 14, null, 1]);
  });
});
