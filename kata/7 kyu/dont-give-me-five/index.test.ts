import { describe, expect, it } from 'vitest';
import dontGiveMeFive from '.';

describe('dontGiveMeFive', () => {
  it('should return total numbers which do not include digit `5`', () => {
    expect.assertions(2);

    expect(dontGiveMeFive(1, 9)).toBe(8);
    expect(dontGiveMeFive(4, 17)).toBe(12);
  });
});
