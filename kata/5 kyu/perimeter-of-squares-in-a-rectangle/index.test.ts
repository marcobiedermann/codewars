import perimeter from '.';

describe('perimeter', () => {
  it('should return sum or all squares', () => {
    expect(perimeter(0)).toBe(4);
    expect(perimeter(5)).toBe(80);
    expect(perimeter(7)).toBe(216);
    expect(perimeter(20)).toBe(114624);
    expect(perimeter(30)).toBe(14098308);
  });
});
