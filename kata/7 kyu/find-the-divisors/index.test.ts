import divisors from '.';

describe('divisors', () => {
  it('should return list of divisors or prime', () => {
    expect.assertions(3);

    expect(divisors(15)).toStrictEqual([3, 5]);
    expect(divisors(12)).toStrictEqual([2, 3, 4, 6]);
    expect(divisors(13)).toStrictEqual('13 is prime');
  });
});
