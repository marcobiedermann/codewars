import assert from 'assert';
import { describe, it } from 'node:test';
import orderedCount from './index.ts';

describe('orderedCount', () => {
  it('should count number of occurrences of each character', () => {
    assert.deepEqual(orderedCount('abracadabra'), [
      ['a', 5],
      ['b', 2],
      ['r', 2],
      ['c', 1],
      ['d', 1],
    ]);
    assert.deepEqual(orderedCount('Code Wars'), [
      ['C', 1],
      ['o', 1],
      ['d', 1],
      ['e', 1],
      [' ', 1],
      ['W', 1],
      ['a', 1],
      ['r', 1],
      ['s', 1],
    ]);
    assert.deepEqual(orderedCount('233312'), [
      ['2', 2],
      ['3', 3],
      ['1', 1],
    ]);
  });
});
