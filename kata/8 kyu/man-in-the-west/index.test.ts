import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import checkTheBucket from './index.ts';

describe('checkTheBucket', () => {
  it('should check if there is gold in the bucket', () => {
    assert.strictEqual(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone']), false);
    assert.strictEqual(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold']), true);
    assert.strictEqual(checkTheBucket(['gold', 'stone', 'stone', 'stone', 'stone']), true);
    assert.strictEqual(checkTheBucket([]), false);
    assert.strictEqual(checkTheBucket(['stone', 'stone', 'stone', 'gold', 'gold']), true);
  });
});
