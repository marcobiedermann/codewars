import { describe, expect, it } from 'vitest';
import correctTail from './index.ts';

describe('assertEquals', () => {
  it('should check if character is last in string', () => {
    expect.assertions(3);

    expect(correctTail('Fox', 'x')).toBe(true);
    expect(correctTail('Rhino', 'o')).toBe(true);
    expect(correctTail('Meerkat', 't')).toBe(true);
  });
});
