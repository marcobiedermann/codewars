import halvingSum from '.';

describe('halvingSum', () => {
  it('should return sum of integer division', () => {
    expect.assertions(2);

    expect(halvingSum(25)).toStrictEqual(47);
    expect(halvingSum(127)).toStrictEqual(247);
  });
});
