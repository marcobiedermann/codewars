import { describe, expect, it } from 'vitest';
import checkTheBucket from '.';

describe('checkTheBucket', () => {
  it('should check if there is gold in the bucket', () => {
    expect.assertions(5);

    expect(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone'])).toBe(false);
    expect(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold'])).toBe(true);
    expect(checkTheBucket(['gold', 'stone', 'stone', 'stone', 'stone'])).toBe(true);
    expect(checkTheBucket([])).toBe(false);
    expect(checkTheBucket(['stone', 'stone', 'stone', 'gold', 'gold'])).toBe(true);
  });
});
