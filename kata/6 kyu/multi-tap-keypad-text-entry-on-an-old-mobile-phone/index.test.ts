import { describe, expect, it } from 'vitest';
import presses from './index.ts';

describe('presses', () => {
  it('should calculate the number of button presses', () => {
    expect.assertions(2);

    expect(presses('LOL')).toBe(9);
    expect(presses('HOW R U')).toBe(13);
  });
});
