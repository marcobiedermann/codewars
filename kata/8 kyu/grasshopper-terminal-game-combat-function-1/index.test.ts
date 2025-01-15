import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import combat from './index.ts';

describe('combat', () => {
  it('should calculate health after damage', () => {
    assert.strictEqual(combat(100, 5), 95);
    assert.strictEqual(combat(92, 8), 84);
    assert.strictEqual(combat(20, 30), 0);
  });
});
