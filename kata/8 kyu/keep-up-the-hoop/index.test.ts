import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import hoopCount from './index.ts';

describe('hoopCount', () => {
  it('should return an encouraging message', () => {
    assert.strictEqual(hoopCount(3), 'Keep at it until you get it');
    assert.strictEqual(hoopCount(11), 'Great, now move on to tricks');
  });
});
