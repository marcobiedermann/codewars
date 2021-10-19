import prefill from '.';

describe('prefill', () => {
  it('should prefill an array of `n` elements having value `v`', () => {
    expect.assertions(7);

    expect(prefill(3, 1)).toStrictEqual([1, 1, 1]);
    expect(prefill(2, 'abc')).toStrictEqual(['abc', 'abc']);
    expect(prefill('1', 1)).toStrictEqual([1]);
    expect(prefill(0, 1)).toStrictEqual([]);
    expect(prefill(3, prefill(2, '2d'))).toStrictEqual([
      ['2d', '2d'],
      ['2d', '2d'],
      ['2d', '2d'],
    ]);

    const t = () => prefill('xyz', 1);

    expect(t).toThrow(TypeError);
    expect(t).toThrow('xyz is invalid');
  });
});
