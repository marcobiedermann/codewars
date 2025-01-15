import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import removeSmallest from './index.ts';

describe('removeSmallest', () => {
  it('works for the examples', () => {
    assert.deepEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
    assert.deepEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
    assert.deepEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
    assert.deepEqual(removeSmallest([]), []);
  });

  it('returns [] if the list has only one element', () => {
    for (let i = 0; i < 10; i += 1) {
      const x = Math.floor(Math.random() * 400);

      assert.deepEqual(removeSmallest([x]), []);
    }
  });

  function randomArray(length: number): number[] {
    return Array.from({ length }, () => Math.floor(Math.random() * 400));
  }

  it('returns a list that misses only one element', () => {
    for (let i = 0; i < 10; i += 1) {
      const arr = randomArray(Math.floor(Math.random() * 10) + 1);
      const l = arr.length;

      assert.strictEqual(removeSmallest(arr).length, l - 1);
    }
  });
});
