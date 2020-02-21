import numPrimorial from '.';

describe('numPrimorial', () => {
  it('should return primorial of `n`', () => {
    expect.assertions(5);

    expect(numPrimorial(3)).toStrictEqual(30);
    expect(numPrimorial(4)).toStrictEqual(210);
    expect(numPrimorial(5)).toStrictEqual(2310);
    expect(numPrimorial(8)).toStrictEqual(9699690);
    expect(numPrimorial(9)).toStrictEqual(223092870);
  });
});
