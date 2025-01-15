import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import highAndLow from './index.ts';

describe('highAndLow', () => {
  it('should return the highest and lowest number', () => {
    assert.strictEqual(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'), '542 -214');
  });
});
