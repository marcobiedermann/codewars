import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumOfMinimums from './index.ts';

describe('sumOfMinimums', () => {
  it('should sum minimum of each row', () => {
    assert.strictEqual(
      sumOfMinimums([
        [7, 9, 8, 6, 2],
        [6, 3, 5, 4, 3],
        [5, 8, 7, 4, 5],
      ]),
      9,
    );
    assert.strictEqual(
      sumOfMinimums([
        [11, 12, 14, 54],
        [67, 89, 90, 56],
        [7, 9, 4, 3],
        [9, 8, 6, 7],
      ]),
      76,
    );
  });
});
