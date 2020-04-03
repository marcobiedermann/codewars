import isPrime from '.';

describe('isPrime', () => {
  it('basic tests', () => {
    expect.assertions(6);

    expect(isPrime(0)).toStrictEqual(false);
    expect(isPrime(1)).toStrictEqual(false);
    expect(isPrime(2)).toStrictEqual(true);
    expect(isPrime(73)).toStrictEqual(true);
    expect(isPrime(75)).toStrictEqual(false);
    expect(isPrime(-1)).toStrictEqual(false);
  });

  it('test prime', () => {
    expect.assertions(5);

    expect(isPrime(3)).toStrictEqual(true);
    expect(isPrime(5)).toStrictEqual(true);
    expect(isPrime(7)).toStrictEqual(true);
    expect(isPrime(41)).toStrictEqual(true);
    expect(isPrime(5099)).toStrictEqual(true);
  });

  it('test not prime', () => {
    expect.assertions(8);

    expect(isPrime(4)).toStrictEqual(false);
    expect(isPrime(6)).toStrictEqual(false);
    expect(isPrime(8)).toStrictEqual(false);
    expect(isPrime(9)).toStrictEqual(false);
    expect(isPrime(45)).toStrictEqual(false);
    expect(isPrime(-5)).toStrictEqual(false);
    expect(isPrime(-8)).toStrictEqual(false);
    expect(isPrime(-41)).toStrictEqual(false);
  });
});
