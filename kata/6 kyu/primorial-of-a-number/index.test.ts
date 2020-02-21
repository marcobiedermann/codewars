import numPrimorial from '.';

describe('numPrimorial', () => {
  it('should return primorial of `n`', () => {
    expect(numPrimorial(3)).toEqual(30);
    expect(numPrimorial(4)).toEqual(210);
    expect(numPrimorial(5)).toEqual(2310);
    expect(numPrimorial(8)).toEqual(9699690);
    expect(numPrimorial(9)).toEqual(223092870);
  });
});
