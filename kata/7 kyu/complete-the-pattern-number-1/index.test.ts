import pattern from '.';

describe('pattern', () => {
  it('should return pattern', () => {
    expect.assertions(3);

    expect(pattern(1)).toStrictEqual('1');
    expect(pattern(2)).toStrictEqual('1\n22');
    expect(pattern(5)).toStrictEqual('1\n22\n333\n4444\n55555');
  });
});
