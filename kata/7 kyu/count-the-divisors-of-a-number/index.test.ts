import getDivisorsCnt from '.';

describe('getDivisorsCnt', () => {
  it('should count number of divisors', () => {
    expect.assertions(4);

    expect(getDivisorsCnt(1)).toStrictEqual(1);
    expect(getDivisorsCnt(10)).toStrictEqual(4);
    expect(getDivisorsCnt(11)).toStrictEqual(2);
    expect(getDivisorsCnt(54)).toStrictEqual(8);
  });
});
