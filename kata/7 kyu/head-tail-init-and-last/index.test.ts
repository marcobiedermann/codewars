import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { head, init, last, tail } from './index.ts';

describe('head, tail, init, last', () => {
  it('should get `head`, `tail`, `init` and `last` from array', () => {
    assert.strictEqual(head([5, 1]), 5);
    assert.deepEqual(tail([1]), []);
    assert.deepEqual(init([1, 5, 7, 9]), [1, 5, 7]);
    assert.strictEqual(last([7, 2]), 2);
  });
});
