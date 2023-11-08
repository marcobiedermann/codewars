import { describe, expect, it } from 'vitest';
import dashatize from '.';

describe('dashatize', () => {
  it('should place a dash between each odd number', () => {
    expect.assertions(8);

    expect(dashatize(274)).toBe('2-7-4');
    expect(dashatize(5311)).toBe('5-3-1-1');
    expect(dashatize(86320)).toBe('86-3-20');
    expect(dashatize(974302)).toBe('9-7-4-3-02');
    expect(dashatize(NaN)).toBe('NaN');
    expect(dashatize(0)).toBe('0');
    expect(dashatize(-1)).toBe('1');
    expect(dashatize(-28369)).toBe('28-3-6-9');
  });
});
