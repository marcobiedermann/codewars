import litres from '.';

describe('litres', () => {
  it('should return number of litres', () => {
    expect.assertions(7);

    expect(litres(2)).toStrictEqual(1);
    expect(litres(1.4)).toStrictEqual(0);
    expect(litres(12.3)).toStrictEqual(6);
    expect(litres(0.82)).toStrictEqual(0);
    expect(litres(11.8)).toStrictEqual(5);
    expect(litres(1787)).toStrictEqual(893);
    expect(litres(0)).toStrictEqual(0);
  });
});
