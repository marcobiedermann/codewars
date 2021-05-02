import mygcd from '.';

describe('mygcd', () => {
  it('should return greatest common divisor', () => {
    expect.assertions(3);

    expect(mygcd(30, 12)).toStrictEqual(6);
    expect(mygcd(8, 9)).toStrictEqual(1);
    expect(mygcd(1, 1)).toStrictEqual(1);
  });
});
