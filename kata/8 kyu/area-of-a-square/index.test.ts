import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import squareArea from './index.ts';

describe('squareAre', () => {
  it('should return the area of the square', () => {
    assert.strictEqual(squareArea(2), 1.62);
    assert.strictEqual(squareArea(0), 0);
    assert.strictEqual(squareArea(14.05), 80);
  });
});
