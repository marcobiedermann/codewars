import { describe, expect, it } from 'vitest';
import foldTo from '.';

describe('foldTo', () => {
  it('should calculate number of folds to reach distance', () => {
    expect.assertions(3);

    expect(foldTo(-1)).toBeNull();
    expect(foldTo(1, 2)).toBe(0);
    expect(foldTo(384000000)).toBe(42);
  });
});
