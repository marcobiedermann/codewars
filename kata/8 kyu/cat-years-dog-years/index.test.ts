import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import humanYearsCatYearsDogYears from './index.ts';

describe('humanYearsCatYearsDogYears', () => {
  it('should human years in cat and dog years', () => {
    assert.deepEqual(humanYearsCatYearsDogYears(1), [1, 15, 15]);
    assert.deepEqual(humanYearsCatYearsDogYears(2), [2, 24, 24]);
    assert.deepEqual(humanYearsCatYearsDogYears(10), [10, 56, 64]);
  });
});
