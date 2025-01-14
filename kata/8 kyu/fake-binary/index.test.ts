import { describe, expect, it } from 'vitest';
import fakeBin from './index.ts';

describe('fakeBin', () => {
  it('should replace digits below 5 with `0` and rest by `1`', () => {
    expect.assertions(3);

    expect(fakeBin('45385593107843568')).toBe('01011110001100111');
    expect(fakeBin('509321967506747')).toBe('101000111101101');
    expect(fakeBin('366058562030849490134388085')).toBe('011011110000101010000011011');
  });
});
