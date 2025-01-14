import { describe, expect, it } from 'vitest';
import distinct from './index.ts';

describe('distinct', () => {
  it('should filter duplicated items', () => {
    expect.assertions(3);

    expect(distinct([1])).toStrictEqual([1]);
    expect(distinct([1, 2])).toStrictEqual([1, 2]);
    expect(distinct([1, 1, 2])).toStrictEqual([1, 2]);
  });
});
