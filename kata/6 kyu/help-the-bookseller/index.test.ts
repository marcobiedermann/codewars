import stockList from '.';

describe('stockList', () => {
  it('should sum quantity of books for each category', () => {
    expect.assertions(3);

    expect(
      stockList(['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B']),
    ).toBe('(A : 200) - (B : 1140)');

    expect(
      stockList(['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'], ['A', 'B', 'C', 'W']),
    ).toBe('(A : 0) - (B : 114) - (C : 70) - (W : 0)');
    expect(stockList([], ['B', 'R', 'D', 'X'])).toBe('');
  });
});
