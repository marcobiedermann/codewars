import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import number from './index.ts';

describe('number', () => {
  it('return number of people sitting in bus after last bus station', () => {
    assert.strictEqual(
      number([
        [10, 0],
        [3, 5],
        [5, 8],
      ]),
      5,
    );
    assert.strictEqual(
      number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
      ]),
      17,
    );
    assert.strictEqual(
      number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
      ]),
      21,
    );
  });
});
