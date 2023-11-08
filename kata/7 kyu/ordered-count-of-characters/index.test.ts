import { describe, expect, it } from 'vitest';
import orderedCount from '.';

describe('orderedCount', () => {
  it('should count number of occurrences of each character', () => {
    expect.assertions(3);

    expect(orderedCount('abracadabra')).toStrictEqual([
      ['a', 5],
      ['b', 2],
      ['r', 2],
      ['c', 1],
      ['d', 1],
    ]);
    expect(orderedCount('Code Wars')).toStrictEqual([
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
    expect(orderedCount('233312')).toStrictEqual([
      ['2', 2],
      ['3', 3],
      ['1', 1],
    ]);
  });
});
