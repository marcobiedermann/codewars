import { describe, expect, it } from 'vitest';
import calculateTip from './index.ts';

describe('calculateTip', () => {
  it('should calculate tip', () => {
    expect.assertions(3);

    expect(calculateTip(20, 'Excellent')).toBe(4);
    expect(calculateTip(26.95, 'good')).toBe(3);
    expect(calculateTip(20, 'hi')).toBe('Rating not recognised');
  });
});
