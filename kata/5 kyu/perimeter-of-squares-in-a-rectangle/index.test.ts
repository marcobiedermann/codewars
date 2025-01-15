import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import perimeter from './index.ts';

describe('perimeter', () => {
  it('should return sum or all squares', () => {
    assert.strictEqual(perimeter(0), 4);
    assert.strictEqual(perimeter(5), 80);
    assert.strictEqual(perimeter(7), 216);
    assert.strictEqual(perimeter(20), 114624);
    assert.strictEqual(perimeter(30), 14098308);
  });
});
