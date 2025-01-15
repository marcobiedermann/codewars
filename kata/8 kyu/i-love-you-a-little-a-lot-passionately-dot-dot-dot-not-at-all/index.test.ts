import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import howMuchILoveYou from './index.ts';

describe('howMuchILoveYou', () => {
  it('should return how much I love you', () => {
    assert.strictEqual(howMuchILoveYou(7), 'I love you');
    assert.strictEqual(howMuchILoveYou(3), 'a lot');
    assert.strictEqual(howMuchILoveYou(6), 'not at all');
  });
});
