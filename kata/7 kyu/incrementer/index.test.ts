import incrementer from '.';

describe('incrementer', () => {
  it('should increment each digit by its position', () => {
    expect.assertions(5);

    expect(incrementer([])).toStrictEqual([]);
    expect(incrementer([1, 2, 3])).toStrictEqual([2, 4, 6]);
    expect(incrementer([4, 6, 7, 1, 3])).toStrictEqual([5, 8, 0, 5, 8]);
    expect(incrementer([3, 6, 9, 8, 9])).toStrictEqual([4, 8, 2, 2, 4]);
    expect(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8])).toStrictEqual([
      2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2,
    ]);
  });
});
