import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import checkAlive from './index.ts';

describe('checkAlive', () => {
  it('should check if user is still alive', () => {
    assert.strictEqual(checkAlive(5), true);
    assert.strictEqual(checkAlive(0), false);
  });
});
