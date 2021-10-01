import isPrime from '.';

describe('isPrime', () => {
  it('basic tests', () => {
    expect.assertions(6);

    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(73)).toBe(true);
    expect(isPrime(75)).toBe(false);
    expect(isPrime(-1)).toBe(false);
  });

  it('test prime', () => {
    expect.assertions(5);

    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(41)).toBe(true);
    expect(isPrime(5099)).toBe(true);
  });

  it('test not prime', () => {
    expect.assertions(8);

    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(45)).toBe(false);
    expect(isPrime(-5)).toBe(false);
    expect(isPrime(-8)).toBe(false);
    expect(isPrime(-41)).toBe(false);
  });
});
