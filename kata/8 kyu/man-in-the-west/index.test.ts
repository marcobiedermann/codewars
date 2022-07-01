import { expect } from 'vitest';
import checkTheBucket from '.';

describe('checkTheBucket', () => {
  it('should check if there is gold in the bucket', () => {
    expect(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone'])).toBe(false);
    expect(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold'])).toBe(true);
    expect(checkTheBucket(['gold', 'stone', 'stone', 'stone', 'stone'])).toBe(true);
    expect(checkTheBucket([])).toBe(false);
    expect(checkTheBucket(['stone', 'stone', 'stone', 'gold', 'gold'])).toBe(true);
  });
});
