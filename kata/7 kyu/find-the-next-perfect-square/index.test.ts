import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findNextSquare from './index.ts';

describe('findNextSquare', () => {
  it('should return the next square for perfect squares', () => {
    assert.strictEqual(findNextSquare(121), 144);
    assert.strictEqual(findNextSquare(625), 676);
    assert.strictEqual(findNextSquare(319225), 320356);
    assert.strictEqual(findNextSquare(15241383936), 15241630849);
  });

  it("should return -1 for numbers which aren't perfect squares", () => {
    assert.strictEqual(findNextSquare(155), -1);
    assert.strictEqual(findNextSquare(342786627), -1);
  });
});
