import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import amIWilson from './index.ts';

describe('amIWilson', () => {
  it('should check if number is a Wilson prime', () => {
    assert.strictEqual(amIWilson(5), true);
    assert.strictEqual(amIWilson(9), false);
    assert.strictEqual(amIWilson(6), false);
  });
});
