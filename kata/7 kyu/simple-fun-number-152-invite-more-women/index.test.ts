import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import inviteMoreWomen from './index.ts';

describe('inviteMoreWomen', () => {
  it('should check if Arthur needs to invite more women', () => {
    assert.strictEqual(inviteMoreWomen([1, -1, 1]), true);
    assert.strictEqual(inviteMoreWomen([1, 1, 1]), true);
    assert.strictEqual(inviteMoreWomen([-1, -1, -1]), false);
    assert.strictEqual(inviteMoreWomen([1, -1]), false);
  });
});
