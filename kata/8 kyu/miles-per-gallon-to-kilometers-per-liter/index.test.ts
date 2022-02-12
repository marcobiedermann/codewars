import converter from '.';

describe('converter', () => {
  it('should convert miles per imperial gallon into kilometers per liter', () => {
    expect.assertions(3);

    expect(converter(10)).toBe(3.54);
    expect(converter(20)).toBe(7.08);
    expect(converter(30)).toBe(10.62);
  });
});
