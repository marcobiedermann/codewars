import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import areaOrPerimeter from './index.ts';

describe('areaOrPerimeter', () => {
  it('should calculate area or perimeter, depending on shape', () => {
    assert.strictEqual(areaOrPerimeter(4, 4), 16);
    assert.strictEqual(areaOrPerimeter(6, 10), 32);
  });
});
