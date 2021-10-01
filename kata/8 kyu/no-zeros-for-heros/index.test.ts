import noBoringZeros from '.';

describe('noBoringZeros', () => {
  it('should remove trailing zeros from number', () => {
    expect.assertions(6);

    expect(noBoringZeros(1450)).toBe(145);
    expect(noBoringZeros(960000)).toBe(96);
    expect(noBoringZeros(1050)).toBe(105);
    expect(noBoringZeros(-1050)).toStrictEqual(-105);
    expect(noBoringZeros(-105)).toStrictEqual(-105);
    expect(noBoringZeros(0)).toBe(0);
  });
});
