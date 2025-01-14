import { describe, expect, it } from 'vitest';
import otherAngle from './index.ts';

describe('otherAngle', () => {
  it('should return third angle of triangle', () => {
    expect.assertions(4);

    expect(otherAngle(30, 60)).toBe(90);
    expect(otherAngle(60, 60)).toBe(60);
    expect(otherAngle(43, 78)).toBe(59);
    expect(otherAngle(10, 20)).toBe(150);
  });
});
