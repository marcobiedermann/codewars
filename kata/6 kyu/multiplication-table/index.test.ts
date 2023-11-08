import { describe, expect, it } from 'vitest';
import multiplicationTable from '.';

describe('multiplicationTable', () => {
  it('should create a NxN multiplication table', () => {
    expect.assertions(1);

    expect(multiplicationTable(3)).toStrictEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });
});
