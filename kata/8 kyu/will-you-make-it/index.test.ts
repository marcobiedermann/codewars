import zeroFuel from '.';

describe('zeroFuel', () => {
  it('should check if it is possible to get to the pump', () => {
    expect.assertions(2);

    expect(zeroFuel(50, 25, 2)).toBe(true);
    expect(zeroFuel(100, 50, 1)).toBe(false);
  });
});
