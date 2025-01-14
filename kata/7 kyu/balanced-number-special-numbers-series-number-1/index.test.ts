import { describe, expect, it } from 'vitest';
import balancedNum from './index.ts';

describe('balancedNum', () => {
  it('check balanced number', () => {
    expect.assertions(5);

    expect(balancedNum(7)).toBe('Balanced');
    expect(balancedNum(959)).toBe('Balanced');
    expect(balancedNum(13)).toBe('Balanced');
    expect(balancedNum(432)).toBe('Not Balanced');
    expect(balancedNum(424)).toBe('Balanced');
  });

  it('check Larger number', () => {
    expect.assertions(5);

    expect(balancedNum(1024)).toBe('Not Balanced');
    expect(balancedNum(66545)).toBe('Not Balanced');
    expect(balancedNum(295591)).toBe('Not Balanced');
    expect(balancedNum(1230987)).toBe('Not Balanced');
    expect(balancedNum(56239814)).toBe('Balanced');
  });
});
