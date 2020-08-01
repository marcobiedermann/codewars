import triangle from '.';

describe('triangle', () => {
  it('should', () => {
    expect.assertions(6);

    expect(triangle('GB')).toStrictEqual('R');
    expect(triangle('RRR')).toStrictEqual('R');
    expect(triangle('RGBG')).toStrictEqual('B');
    expect(triangle('RBRGBRB')).toStrictEqual('G');
    expect(triangle('RBRGBRBGGRRRBGBBBGG')).toStrictEqual('G');
    expect(triangle('B')).toStrictEqual('B');
  });
});
