import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import multiplicationTable from './index.ts';

describe('multiplicationTable', () => {
  it('should create a NxN multiplication table', () => {
    assert.deepEqual(multiplicationTable(3), [
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });
});
