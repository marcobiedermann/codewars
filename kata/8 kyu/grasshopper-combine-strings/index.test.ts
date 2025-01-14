import { describe, expect, it } from 'vitest';
import combineNames from './index.ts';

describe('combineNames', () => {
  it('should combine names', () => {
    expect.assertions(1);

    expect(combineNames('James', 'Stevens')).toBe('James Stevens');
  });
});
