import SeriesSum from '.';

describe('SeriesSum', () => {
  it('should sum series up to nth term', () => {
    expect(SeriesSum(1)).toEqual('1.00');
    expect(SeriesSum(2)).toEqual('1.25');
    expect(SeriesSum(3)).toEqual('1.39');
    expect(SeriesSum(4)).toEqual('1.49');
  });
});
