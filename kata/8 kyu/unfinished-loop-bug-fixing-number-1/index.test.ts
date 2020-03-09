import createArray from '.';

describe('createArray', () => {
  it('should return array of each number in sequence', () => {
    expect.assertions(5);

    expect(createArray(1)).toStrictEqual([1]);
    expect(createArray(2)).toStrictEqual([1, 2]);
    expect(createArray(3)).toStrictEqual([1, 2, 3]);
    expect(createArray(4)).toStrictEqual([1, 2, 3, 4]);
    expect(createArray(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
