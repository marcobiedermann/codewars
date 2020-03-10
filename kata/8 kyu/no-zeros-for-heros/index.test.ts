import noBoringZeros from '.';

describe('noBoringZeros', () => {
  it('should remove trailing zeros from number', () => {
    expect.assertions(6);

    expect(noBoringZeros(1450)).toStrictEqual(145);
    expect(noBoringZeros(960000)).toStrictEqual(96);
    expect(noBoringZeros(1050)).toStrictEqual(105);
    expect(noBoringZeros(-1050)).toStrictEqual(-105);
    expect(noBoringZeros(-105)).toStrictEqual(-105);
    expect(noBoringZeros(0)).toStrictEqual(0);
  });
});
