import { describe, expect, it } from 'vitest';
import {
  dividedBy,
  eight,
  five,
  four,
  minus,
  nine,
  one,
  plus,
  seven,
  six,
  three,
  times,
  two,
  zero,
} from './index.ts';

describe('calculations', () => {
  it('should calculate with functions', () => {
    expect.assertions(24);

    expect(zero()).toBe(0);
    expect(one()).toBe(1);
    expect(two()).toBe(2);
    expect(three()).toBe(3);
    expect(four()).toBe(4);
    expect(five()).toBe(5);
    expect(six()).toBe(6);
    expect(seven()).toBe(7);
    expect(eight()).toBe(8);
    expect(nine()).toBe(9);

    expect(zero(plus(one()))).toBe(1);
    expect(one(plus(two()))).toBe(3);
    expect(two(plus(three()))).toBe(5);
    expect(three(plus(four()))).toBe(7);
    expect(four(plus(five()))).toBe(9);
    expect(five(plus(six()))).toBe(11);
    expect(six(plus(seven()))).toBe(13);
    expect(seven(plus(eight()))).toBe(15);
    expect(eight(plus(nine()))).toBe(17);
    expect(nine(plus(zero()))).toBe(9);

    expect(seven(times(five()))).toBe(35);
    expect(four(plus(nine()))).toBe(13);
    expect(eight(minus(three()))).toBe(5);
    expect(six(dividedBy(two()))).toBe(3);
  });
});
