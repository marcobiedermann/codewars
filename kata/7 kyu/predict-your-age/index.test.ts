import { expect } from 'vitest';
import predictAge from '.';

describe('predictAge', () => {
  it('should predict age', () => {
    expect(predictAge(65, 60, 75, 55, 60, 63, 64, 45)).toBe(86);
  });
});
