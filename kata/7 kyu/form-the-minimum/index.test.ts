import minValue from '.';

describe('minValue', () => {
  it('should return smallest number', () => {
    expect.assertions(9);

    expect(minValue([1, 3, 1])).toStrictEqual(13);
    expect(minValue([4, 7, 5, 7])).toStrictEqual(457);
    expect(minValue([4, 8, 1, 4])).toStrictEqual(148);
    expect(minValue([5, 7, 9, 5, 7])).toStrictEqual(579);
    expect(minValue([6, 7, 8, 7, 6, 6])).toStrictEqual(678);
    expect(minValue([5, 6, 9, 9, 7, 6, 4])).toStrictEqual(45679);
    expect(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])).toStrictEqual(134679);
    expect(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])).toStrictEqual(356789);
    expect(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual(1);
  });
});
