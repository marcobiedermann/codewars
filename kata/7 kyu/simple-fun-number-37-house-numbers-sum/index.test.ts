import houseNumbersSum from '.';

describe('houseNumbersSum', () => {
  it('should return sum of house numbers', () => {
    expect.assertions(4);

    expect(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])).toStrictEqual(11);
    expect(houseNumbersSum([4, 2, 1, 6, 0])).toStrictEqual(13);
    expect(houseNumbersSum([4, 1, 2, 3, 0, 10, 2])).toStrictEqual(10);
    expect(houseNumbersSum([0, 1, 2, 3, 4, 5])).toStrictEqual(0);
  });
});
