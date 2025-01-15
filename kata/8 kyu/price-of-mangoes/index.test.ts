import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import mango from './index.ts';

describe('mango', () => {
  it('should return the total cost of the mangoes', () => {
    assert.strictEqual(mango(3, 3), 6);
    assert.strictEqual(mango(9, 5), 30);
  });
});
