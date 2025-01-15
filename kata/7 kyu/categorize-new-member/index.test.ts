import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import openOrSenior from './index.ts';

describe('openOrSenior', () => {
  it('should transform members in list to `Open` or `Senior`', () => {
    assert.deepEqual(
      openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
      ]),
      ['Open', 'Senior', 'Open', 'Senior'],
    );
    assert.deepEqual(
      openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [54, 23],
      ]),
      ['Open', 'Open', 'Open', 'Open'],
    );
    assert.deepEqual(
      openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12],
      ]),
      ['Senior', 'Open', 'Open', 'Open'],
    );
  });
});
