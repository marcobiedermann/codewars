import formatMoney from '.';

describe('formatMoney', () => {
  it('should form the amount formatting in dollars and cents', () => {
    expect.assertions(1);

    expect(formatMoney(39.99)).toStrictEqual('$39.99');
  });
});
