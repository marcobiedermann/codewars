import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import combineNames from './index.ts';

describe('combineNames', () => {
  it('should combine names', () => {
    assert.strictEqual(combineNames('James', 'Stevens'), 'James Stevens');
  });
});
