import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import predictAge from './index.ts';

describe('predictAge', () => {
  it('should predict age', () => {
    assert.strictEqual(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
  });
});
