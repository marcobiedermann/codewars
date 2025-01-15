import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import areaLargestSquare from './index.ts';

describe('areaLargestSquare', () => {
  it('should get the area of the largest square that can fit inside a circle', () => {
    assert.strictEqual(areaLargestSquare(5), 50);
    assert.strictEqual(areaLargestSquare(7), 98);
    assert.strictEqual(areaLargestSquare(15), 450);
  });
});
