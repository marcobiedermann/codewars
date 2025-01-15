import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import apple from './index.ts';

describe('apple', () => {
  it('should check for apple turnover', () => {
    assert.strictEqual(apple('50'), "It's hotter than the sun!!");
    assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.');
  });
});
