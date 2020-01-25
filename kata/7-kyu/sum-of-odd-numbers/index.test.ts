import rowSumOddNumbers from '.';

describe('rowSumOddNumbers', () => {
  it('should return row sum of consecutive odd numbers', () => {
    expect(rowSumOddNumbers(1)).toEqual(1);
    expect(rowSumOddNumbers(42)).toEqual(74088);
  });
});
