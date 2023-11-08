import { describe, expect, it } from 'vitest';
import checkCoupon from '.';

describe('checkCoupon', () => {
  it('should verify coupon code', () => {
    expect.assertions(2);

    expect(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')).toBe(true);
    expect(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')).toBe(false);
  });
});
