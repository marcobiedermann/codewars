import { describe, expect, it } from 'vitest';
import deleteNth from './index.ts';

describe('deleteNth', () => {
  it('should return list containing each number at most N times', () => {
    expect.assertions(2);

    expect(deleteNth([20, 37, 20, 21], 1)).toStrictEqual([20, 37, 21]);
    expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toStrictEqual([1, 1, 3, 3, 7, 2, 2, 2]);
  });
});
