import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import divCon from './index.ts';

describe('divCon', () => {
  it('should', () => {
    assert.strictEqual(divCon([9, 3, '7', '3']), 2);
    assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
    assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
  });
});
