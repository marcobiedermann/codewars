import nearestSq from '.';

describe('nearestSq', () => {
  it('should find nearest square number', () => {
    expect.assertions(5);

    expect(nearestSq(1)).toStrictEqual(1);
    expect(nearestSq(2)).toStrictEqual(1);
    expect(nearestSq(10)).toStrictEqual(9);
    expect(nearestSq(111)).toStrictEqual(121);
    expect(nearestSq(9999)).toStrictEqual(10000);
  });
});
