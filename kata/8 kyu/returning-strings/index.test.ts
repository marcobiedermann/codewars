import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import greet from './index.ts';

describe('greet', () => {
  it('should return greeting statement', () => {
    assert.strictEqual(greet('Ryan'), 'Hello, Ryan how are you doing today?');
    assert.strictEqual(greet('Shingles'), 'Hello, Shingles how are you doing today?');
  });
});
