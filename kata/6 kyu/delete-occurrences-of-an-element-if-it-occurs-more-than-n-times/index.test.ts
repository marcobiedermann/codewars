import { expect } from 'vitest';
import deleteNth from '.';

describe('deleteNth', () => {
  it('should return list containing each number at most N times', () => {
    expect(deleteNth([20, 37, 20, 21], 1)).toStrictEqual([20, 37, 21]);
    expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toStrictEqual([1, 1, 3, 3, 7, 2, 2, 2]);
  });
});
