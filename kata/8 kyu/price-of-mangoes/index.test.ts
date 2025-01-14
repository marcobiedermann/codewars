import { describe, expect, it } from 'vitest';
import mango from './index.ts';

describe('mango', () => {
  it('should return the total cost of the mangoes', () => {
    expect.assertions(2);

    expect(mango(3, 3)).toBe(6);
    expect(mango(9, 5)).toBe(30);
  });
});
