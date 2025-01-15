import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import feast from './index.ts';

describe('feast', () => {
  it('should check if beast is allowed to bring dish to feast', () => {
    assert.strictEqual(feast('great blue heron', 'garlic naan'), true);
    assert.strictEqual(feast('chickadee', 'chocolate cake'), true);
    assert.strictEqual(feast('brown bear', 'bear claw'), false);
  });
});
