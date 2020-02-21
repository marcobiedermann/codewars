import rowSumOddNumbers from '.';

describe('rowSumOddNumbers', () => {
  it('should return row sum of consecutive odd numbers', () => {
    expect.assertions(2);

    expect(rowSumOddNumbers(1)).toStrictEqual(1);
    expect(rowSumOddNumbers(42)).toStrictEqual(74088);
  });
});
