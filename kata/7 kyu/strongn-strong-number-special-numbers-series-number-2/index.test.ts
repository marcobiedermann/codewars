import { describe, expect, it } from 'vitest';
import strong from './index.ts';

describe('strong', () => {
  it('should check if it is a strong number', () => {
    expect.assertions(6);

    expect(strong(1)).toBe('STRONG!!!!');
    expect(strong(2)).toBe('STRONG!!!!');
    expect(strong(145)).toBe('STRONG!!!!');
    expect(strong(7)).toBe('Not Strong !!');
    expect(strong(93)).toBe('Not Strong !!');
    expect(strong(185)).toBe('Not Strong !!');
  });
});
