import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import circleArea from './index.ts';

describe('circleArea', () => {
  it('should calculate the area of a circle with the given radius', () => {
    assert.strictEqual(circleArea(-1485.86), false);
    assert.strictEqual(circleArea(0), false);
    assert.strictEqual(circleArea(43.2673), 5881.25);
    assert.strictEqual(circleArea(68), 14526.72);
    assert.strictEqual(circleArea('number'), false);
  });
});
