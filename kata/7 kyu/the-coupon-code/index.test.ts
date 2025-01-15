import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import checkCoupon from './index.ts';

describe('checkCoupon', () => {
  it('should verify coupon code', () => {
    assert.strictEqual(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
    assert.strictEqual(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
  });
});
