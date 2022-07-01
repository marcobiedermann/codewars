import { expect } from 'vitest';
import sameCase from '.';

describe('sameCase', () => {
  it('should check if two given characters are the same case', () => {
    expect(sameCase('C', 'B')).toBe(1);
    expect(sameCase('b', 'a')).toBe(1);
    expect(sameCase('d', 'd')).toBe(1);
    expect(sameCase('A', 's')).toBe(0);
    expect(sameCase('c', 'B')).toBe(0);
    expect(sameCase('b', 'Z')).toBe(0);
    expect(sameCase('\t', 'Z')).toStrictEqual(-1);
    expect(sameCase('H', ':')).toStrictEqual(-1);
  });
});
