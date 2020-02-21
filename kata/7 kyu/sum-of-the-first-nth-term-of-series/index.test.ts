import SeriesSum from '.';

describe('seriesSum', () => {
  it('should sum series up to nth term', () => {
    expect.assertions(4);

    expect(SeriesSum(1)).toStrictEqual('1.00');
    expect(SeriesSum(2)).toStrictEqual('1.25');
    expect(SeriesSum(3)).toStrictEqual('1.39');
    expect(SeriesSum(4)).toStrictEqual('1.49');
  });
});
