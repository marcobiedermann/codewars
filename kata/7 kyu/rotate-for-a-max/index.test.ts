import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import maxRot from './index.ts';

describe('maxRot', () => {
  it('should return max rotated value', () => {
    assert.strictEqual(maxRot(38458215), 85821534);
    assert.strictEqual(maxRot(195881031), 988103115);
    assert.strictEqual(maxRot(896219342), 962193428);
    assert.strictEqual(maxRot(69418307), 94183076);
  });
});
