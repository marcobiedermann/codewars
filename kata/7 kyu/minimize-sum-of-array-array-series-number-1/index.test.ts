import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import minSum from './index.ts';

describe('minSum', () => {
  it('should find the minimum sum which is obtained from summing each two integers product .', () => {
    assert.strictEqual(minSum([5, 4, 2, 3]), 22);
    assert.strictEqual(minSum([12, 6, 10, 26, 3, 24]), 342);
    assert.strictEqual(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);
  });
});
