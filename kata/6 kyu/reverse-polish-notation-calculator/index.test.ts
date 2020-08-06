import calc from '.';

describe('calc', () => {
  it('should', () => {
    expect.assertions(7);

    expect(calc('')).toStrictEqual(0);
    expect(calc('3')).toStrictEqual(3);
    expect(calc('3.5')).toStrictEqual(3.5);
    expect(calc('1 3 +')).toStrictEqual(4);
    expect(calc('1 3 *')).toStrictEqual(3);
    expect(calc('1 3 -')).toStrictEqual(-2);
    expect(calc('4 2 /')).toStrictEqual(2);
  });
});
