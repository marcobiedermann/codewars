import { describe, expect, it } from 'vitest';
import doubleInteger from './index.ts';

describe('doubleInteger', () => {
  it('should double integer', () => {
    expect.assertions(1);

    expect(doubleInteger(2)).toBe(4);
  });
});
