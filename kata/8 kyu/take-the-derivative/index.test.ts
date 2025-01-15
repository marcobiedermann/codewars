import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import derive from './index.ts';

describe('derive', () => {
  it('should take the derivative', () => {
    assert.strictEqual(derive(7, 8), '56x^7');
    assert.strictEqual(derive(5, 9), '45x^8');
  });
});
