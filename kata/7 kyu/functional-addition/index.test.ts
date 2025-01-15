import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import add from './index.ts';

describe('add', () => {
  it('should return a function that adds `n` to number', () => {
    assert.strictEqual(add(1)(3), 4);
  });
});
