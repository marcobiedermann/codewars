import checkCoupon from '.';

describe('checkCoupon', () => {
  it('should verify coupon code', () => {
    expect.assertions(2);

    expect(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')).toStrictEqual(true);
    expect(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')).toStrictEqual(false);
  });
});
