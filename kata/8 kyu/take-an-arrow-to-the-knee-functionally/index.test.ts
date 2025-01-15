import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import ArrowFunc from './index.ts';

describe('arrowFunc', () => {
  it('should convert the number to its corresponding ascii character', () => {
    assert.strictEqual(ArrowFunc([84, 101, 115, 116]), 'Test');
    assert.strictEqual(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]), 'FUS ROH DAH');
  });
});
