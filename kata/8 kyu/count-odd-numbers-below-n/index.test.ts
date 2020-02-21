import oddCount from '.';

describe('oddCount', () => {
  it('should count odd numbers below `n`', () => {
    expect.assertions(2);

    expect(oddCount(15)).toStrictEqual(7);
    expect(oddCount(15023)).toStrictEqual(7511);
  });
});
