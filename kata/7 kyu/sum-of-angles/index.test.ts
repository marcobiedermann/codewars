import { describe, expect, it } from 'vitest';
import angle from './index.ts';

describe('angle', () => {
  it('should get inner sum of angles in n-sided polygon', () => {
    expect.assertions(2);

    expect(angle(3)).toBe(180);
    expect(angle(4)).toBe(360);
  });
});
