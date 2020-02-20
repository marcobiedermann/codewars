import checkCoupon from '.';

describe('checkCoupon', () => {
  it('should verify coupon code', () => {
    expect(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')).toEqual(true);
    expect(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')).toEqual(false);
  });
});
