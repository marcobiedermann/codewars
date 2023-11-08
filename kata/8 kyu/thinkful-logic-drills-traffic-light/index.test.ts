import { describe, expect, it } from 'vitest';
import updateLight from '.';

describe('updateLight', () => {
  it('should return next color', () => {
    expect.assertions(3);

    expect(updateLight('green')).toBe('yellow');
    expect(updateLight('yellow')).toBe('red');
    expect(updateLight('red')).toBe('green');
  });
});
