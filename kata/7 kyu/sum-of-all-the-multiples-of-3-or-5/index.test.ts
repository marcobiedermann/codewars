import findSum from '.';

describe('findSum', () => {
  it('should sum all products of `3` or `5`', () => {
    expect(findSum(5)).toEqual(8);
    expect(findSum(10)).toEqual(33);
  });
});
