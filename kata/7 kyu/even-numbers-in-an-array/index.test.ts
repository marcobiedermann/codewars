import evenNumbers from '.';

describe('evenNumbers', () => {
  it('should return last even numbers', () => {
    expect.assertions(3);

    expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toStrictEqual([4, 6, 8]);
    expect(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)).toStrictEqual([-8, 26]);
    expect(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)).toStrictEqual([6]);
  });
});
