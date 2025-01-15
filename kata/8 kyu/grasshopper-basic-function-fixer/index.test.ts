import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import addFive from './index.ts';

describe('addFive', () => {
  it('should add `5` to the given number', () => {
    assert.strictEqual(addFive(5), 10);
    assert.strictEqual(addFive(0), 5);
    assert.strictEqual(addFive(-5), 0);
  });
});
