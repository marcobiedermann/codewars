import { describe, expect, it } from 'vitest';
import replaceDots from './index.ts';

describe('replaceDots', () => {
  it('should replace all dots with dashes', () => {
    expect.assertions(1);

    expect(replaceDots('one.two.three')).toBe('one-two-three');
  });
});
