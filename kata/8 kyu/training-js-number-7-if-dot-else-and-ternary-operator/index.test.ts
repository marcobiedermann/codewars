import saleHotdogs from '.';

describe('saleHotdogs', () => {
  it('should', () => {
    expect.assertions(6);

    expect(saleHotdogs(1)).toStrictEqual(100);
    expect(saleHotdogs(4)).toStrictEqual(400);
    expect(saleHotdogs(5)).toStrictEqual(475);
    expect(saleHotdogs(9)).toStrictEqual(855);
    expect(saleHotdogs(10)).toStrictEqual(900);
    expect(saleHotdogs(100)).toStrictEqual(9000);
  });
});
