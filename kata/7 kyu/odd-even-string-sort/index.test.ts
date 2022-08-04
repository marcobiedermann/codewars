import sortMyString from '.';

describe('sortMyString', () => {
  it('should group characters by even and odd index', () => {
    expect.assertions(2);

    expect(sortMyString('CodeWars')).toBe('CdWr oeas');
    expect(sortMyString("YCOLUE'VREER")).toBe("YOU'RE CLEVER");
  });
});
