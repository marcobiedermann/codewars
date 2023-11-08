import { describe, expect, it } from 'vitest';
import feast from '.';

describe('feast', () => {
  it('should check if beast is allowed to bring dish to feast', () => {
    expect.assertions(3);

    expect(feast('great blue heron', 'garlic naan')).toBe(true);
    expect(feast('chickadee', 'chocolate cake')).toBe(true);
    expect(feast('brown bear', 'bear claw')).toBe(false);
  });
});
