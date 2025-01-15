import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import remainder from './index.ts';

describe('remainder', () => {
  it('should find the remainder', () => {
    assert.strictEqual(remainder(17, 5), 2);
    assert.strictEqual(remainder(13, 72), remainder(72, 13));
    assert.strictEqual(remainder(1, 0), NaN);
    assert.strictEqual(remainder(0, 0), NaN);
  });
});
