import findSum from '.';

describe('findSum', () => {
  it('should sum all products of `3` or `5`', () => {
    expect.assertions(2);

    expect(findSum(5)).toStrictEqual(8);
    expect(findSum(10)).toStrictEqual(33);
  });
});
