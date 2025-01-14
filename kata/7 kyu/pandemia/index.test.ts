import { describe, expect, it } from 'vitest';
import infected from './index.ts';

describe('infected', () => {
  it('should calculate percentage of infected populatopn', () => {
    expect.assertions(5);

    expect(infected('01000000X000X011X0X')).toBe(73.33333333333333);
    expect(infected('01X000X010X011XX')).toBe(72.72727272727273);
    expect(infected('XXXXX')).toBe(0);
    expect(infected('0000000010')).toBe(100);
    expect(infected('X00X000000X10X0100')).toBe(42.857142857142854);
  });
});
