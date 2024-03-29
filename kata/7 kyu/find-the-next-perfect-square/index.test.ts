import { describe, expect, it } from 'vitest';
import findNextSquare from '.';

describe('findNextSquare', () => {
  it('should return the next square for perfect squares', () => {
    expect.assertions(4);

    expect(findNextSquare(121)).toBe(144);
    expect(findNextSquare(625)).toBe(676);
    expect(findNextSquare(319225)).toBe(320356);
    expect(findNextSquare(15241383936)).toBe(15241630849);
  });

  it("should return -1 for numbers which aren't perfect squares", () => {
    expect.assertions(2);

    expect(findNextSquare(155)).toBe(-1);
    expect(findNextSquare(342786627)).toBe(-1);
  });
});
