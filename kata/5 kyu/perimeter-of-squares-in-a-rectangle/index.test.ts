import perimeter from '.';

describe('perimeter', () => {
  it('should return sum or all squares', () => {
    expect.assertions(5);

    expect(perimeter(0)).toStrictEqual(4);
    expect(perimeter(5)).toStrictEqual(80);
    expect(perimeter(7)).toStrictEqual(216);
    expect(perimeter(20)).toStrictEqual(114624);
    expect(perimeter(30)).toStrictEqual(14098308);
  });
});
