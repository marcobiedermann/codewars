import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import numberOfRectangles from './index.ts';

describe('numberOfRectangles', () => {
  it('should calculate number of rectangles in rectangle', () => {
    assert.strictEqual(numberOfRectangles(4, 4), 100);
    assert.strictEqual(numberOfRectangles(5, 5), 225);
  });
});
