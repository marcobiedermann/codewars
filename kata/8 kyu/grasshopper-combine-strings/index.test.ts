import { expect } from 'vitest';
import combineNames from '.';

describe('combineNames', () => {
  it('should combine names', () => {
    expect(combineNames('James', 'Stevens')).toBe('James Stevens');
  });
});
