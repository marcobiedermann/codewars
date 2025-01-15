import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import dataReverse from './index.ts';

describe('dataReverse', () => {
  it('should reverse chunks of 8', () => {
    assert.deepEqual(
      dataReverse([
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
        0,
      ]),
      [
        1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
        1,
      ],
    );
    assert.deepEqual(
      dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]),
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
    );
  });
});
