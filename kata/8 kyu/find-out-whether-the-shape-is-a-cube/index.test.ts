import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import cubeChecker from './index.ts';

describe('cubeChecker', () => {
  it('should check if the shape is a cube', () => {
    assert.strictEqual(cubeChecker(56.3, 1), false);
    assert.strictEqual(cubeChecker(-1, 2), false);
    assert.strictEqual(cubeChecker(8, 3), false);
    assert.strictEqual(cubeChecker(8, 2), true);
    assert.strictEqual(cubeChecker(-8, -2), false);
    assert.strictEqual(cubeChecker(0, 0), false);
    assert.strictEqual(cubeChecker(1, 5), false);
    assert.strictEqual(cubeChecker(125, 5), true);
    assert.strictEqual(cubeChecker(125, -5), false);
  });
});
