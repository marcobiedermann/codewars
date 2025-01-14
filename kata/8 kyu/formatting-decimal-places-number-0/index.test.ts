import { describe, expect, it } from 'vitest';
import twoDecimalPlaces from './index.ts';

describe('twoDecimalPlaces', () => {
  it('should round number to two decimal places', () => {
    expect.assertions(3);

    expect(twoDecimalPlaces(4.659725356)).toBe(4.66);
    expect(twoDecimalPlaces(173735326.3783732)).toBe(173735326.38);
    expect(twoDecimalPlaces(4.653725356)).toBe(4.65);
  });
});
