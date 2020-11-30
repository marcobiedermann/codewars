import automorphic from '.';

describe('automorphic', () => {
  it('should check if number is automorphic', () => {
    expect.assertions(10);

    expect(automorphic(1)).toStrictEqual('Automorphic');
    expect(automorphic(3)).toStrictEqual('Not!!');
    expect(automorphic(6)).toStrictEqual('Automorphic');
    expect(automorphic(9)).toStrictEqual('Not!!');
    expect(automorphic(25)).toStrictEqual('Automorphic');
    expect(automorphic(53)).toStrictEqual('Not!!');
    expect(automorphic(76)).toStrictEqual('Automorphic');
    expect(automorphic(95)).toStrictEqual('Not!!');
    expect(automorphic(625)).toStrictEqual('Automorphic');
    expect(automorphic(225)).toStrictEqual('Not!!');
  });
});
