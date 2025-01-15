import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { average, cube, even, odd, square, sum } from './index.ts';

describe('foo', () => {
  it('should', () => {
    const numbers = [1, 2, 3, 4, 5];

    assert.deepEqual(square(numbers), [1, 4, 9, 16, 25]);
    assert.deepEqual(cube(numbers), [1, 8, 27, 64, 125]);
    assert.strictEqual(sum(numbers), 15);
    assert.strictEqual(average(numbers), 3);
    assert.deepEqual(even(numbers), [2, 4]);
    assert.deepEqual(odd(numbers), [1, 3, 5]);
  });
});
