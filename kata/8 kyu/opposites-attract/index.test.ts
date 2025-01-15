import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import lovefunc from './index.ts';

describe('lovefunc', () => {
  it('should check if one number is odd and one is even', () => {
    assert.strictEqual(lovefunc(1, 4), true);
    assert.strictEqual(lovefunc(2, 2), false);
    assert.strictEqual(lovefunc(0, 1), true);
    assert.strictEqual(lovefunc(0, 0), false);
  });
});
