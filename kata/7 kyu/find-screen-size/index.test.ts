import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findScreenHeight from './index.ts';

describe('findScreenHeight', () => {
  it('should return width and height of monitor', () => {
    assert.strictEqual(findScreenHeight(1024, '4:3'), '1024x768');
    assert.strictEqual(findScreenHeight(1280, '16:9'), '1280x720');
    assert.strictEqual(findScreenHeight(3840, '32:9'), '3840x1080');
  });
});
