import { describe, expect, it } from 'vitest';
import drawStairs from '.';

describe('drawStairs', () => {
  it('draw stairs with only 1 step', () => {
    expect.assertions(1);

    expect(drawStairs(1)).toBe('I');
  });

  it('draw stairs with 3 steps', () => {
    expect.assertions(1);

    expect(drawStairs(3)).toBe('I\n I\n  I');
  });

  it('draw stairs with 5 steps', () => {
    expect.assertions(1);

    expect(drawStairs(5)).toBe('I\n I\n  I\n   I\n    I');
  });
});
