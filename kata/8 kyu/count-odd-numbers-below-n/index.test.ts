import oddCount from '.';

describe('oddCount', () => {
  it('should count odd numbers below `n`', () => {
    expect(oddCount(15)).toEqual(7);
    expect(oddCount(15023)).toEqual(7511);
  });
});
