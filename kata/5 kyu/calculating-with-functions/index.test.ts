import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
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
    assert.strictEqual(zero(), 0);
    assert.strictEqual(one(), 1);
    assert.strictEqual(two(), 2);
    assert.strictEqual(three(), 3);
    assert.strictEqual(four(), 4);
    assert.strictEqual(five(), 5);
    assert.strictEqual(six(), 6);
    assert.strictEqual(seven(), 7);
    assert.strictEqual(eight(), 8);
    assert.strictEqual(nine(), 9);

    assert.strictEqual(zero(plus(one())), 1);
    assert.strictEqual(one(plus(two())), 3);
    assert.strictEqual(two(plus(three())), 5);
    assert.strictEqual(three(plus(four())), 7);
    assert.strictEqual(four(plus(five())), 9);
    assert.strictEqual(five(plus(six())), 11);
    assert.strictEqual(six(plus(seven())), 13);
    assert.strictEqual(seven(plus(eight())), 15);
    assert.strictEqual(eight(plus(nine())), 17);
    assert.strictEqual(nine(plus(zero())), 9);

    assert.strictEqual(seven(times(five())), 35);
    assert.strictEqual(four(plus(nine())), 13);
    assert.strictEqual(eight(minus(three())), 5);
    assert.strictEqual(six(dividedBy(two())), 3);
  });
});
