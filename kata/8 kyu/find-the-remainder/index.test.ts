import { describe, expect, it } from 'vitest';
import remainder from './index.ts';

describe('remainder', () => {
  it('should find the remainder', () => {
    expect.assertions(4);

    expect(remainder(17, 5)).toBe(2);
    expect(remainder(13, 72)).toStrictEqual(remainder(72, 13));
    expect(remainder(1, 0)).toBeNaN();
    expect(remainder(0, 0)).toBeNaN();
  });
});
