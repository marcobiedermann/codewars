import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import toBinary from './index.ts';

describe('toBinary', () => {
  it('should convert value to binary format', () => {
    assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);
  });
});
