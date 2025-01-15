import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import differenceInAges from './index.ts';

describe('differenceInAges', () => {
  it('should find the difference in age between oldest and youngest', () => {
    assert.deepEqual(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
    assert.deepEqual(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
  });
});
