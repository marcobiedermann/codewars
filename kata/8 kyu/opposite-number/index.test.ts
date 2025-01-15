import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import opposite from './index.ts';

describe('opposite', () => {
  it('should return its opposite', () => {
    assert.strictEqual(opposite(1), -1);
  });
});
