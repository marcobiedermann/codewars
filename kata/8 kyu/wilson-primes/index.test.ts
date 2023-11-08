import { describe, expect, it } from 'vitest';
import amIWilson from '.';

describe('amIWilson', () => {
  it('should check if number is a Wilson prime', () => {
    expect.assertions(3);

    expect(amIWilson(5)).toBe(true);
    expect(amIWilson(9)).toBe(false);
    expect(amIWilson(6)).toBe(false);
  });
});
