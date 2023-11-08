import { describe, expect, it } from 'vitest';
import superSize from '.';

describe('superSize', () => {
  it('should rearrange integer into largest possible value', () => {
    expect.assertions(9);

    expect(superSize(69)).toBe(96);
    expect(superSize(513)).toBe(531);
    expect(superSize(2017)).toBe(7210);
    expect(superSize(414)).toBe(441);
    expect(superSize(608719)).toBe(987610);
    expect(superSize(123456789)).toBe(987654321);
    expect(superSize(700000000001)).toBe(710000000000);
    expect(superSize(666666)).toBe(666666);
    expect(superSize(2)).toBe(2);
  });
});
