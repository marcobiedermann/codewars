import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import noOdds from './index.ts';

describe('noOdds', () => {
  it('should return not odd numbers', () => {
    assert.deepEqual(noOdds([0, 1]), [0]);
    assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2]);
  });
});
