import { expect } from 'vitest';
import strong from '.';

describe('strong', () => {
  it('should check if it is a strong number', () => {
    expect(strong(1)).toBe('STRONG!!!!');
    expect(strong(2)).toBe('STRONG!!!!');
    expect(strong(145)).toBe('STRONG!!!!');
    expect(strong(7)).toBe('Not Strong !!');
    expect(strong(93)).toBe('Not Strong !!');
    expect(strong(185)).toBe('Not Strong !!');
  });
});
