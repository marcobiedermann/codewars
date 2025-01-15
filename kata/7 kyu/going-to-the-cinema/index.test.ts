import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import movie from './index.ts';

describe('movie', () => {
  it('should calculate how many times you have to go to the cinema', () => {
    assert.strictEqual(movie(500, 15, 0.9), 43);
    assert.strictEqual(movie(100, 10, 0.95), 24);
  });
});
