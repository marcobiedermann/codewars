import { describe, expect, it } from 'vitest';
import strCount from '.';

describe('strCount', () => {
  it('should count occurrences of letter in word', () => {
    expect.assertions(3);

    expect(strCount('Hello', 'o')).toBe(1);
    expect(strCount('Hello', 'l')).toBe(2);
    expect(strCount('', 'z')).toBe(0);
  });
});
