import between from '.';

describe('between', () => {
  it('should return all integers between the lower and upper boundaries, including', () => {
    expect.assertions(2);

    expect(between(1, 4)).toStrictEqual([1, 2, 3, 4]);
    expect(between(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2]);
  });
});
