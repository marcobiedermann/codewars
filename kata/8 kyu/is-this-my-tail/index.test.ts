import { expect } from 'vitest';
import correctTail from '.';

describe('assertEquals', () => {
  it('should check if character is last in string', () => {
    expect(correctTail('Fox', 'x')).toBe(true);
    expect(correctTail('Rhino', 'o')).toBe(true);
    expect(correctTail('Meerkat', 't')).toBe(true);
  });
});
