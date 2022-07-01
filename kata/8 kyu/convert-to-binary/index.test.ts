import { expect } from 'vitest';
import toBinary from '.';

describe('toBinary', () => {
  it('should convert value to binary format', () => {
    expect(toBinary(1)).toBe(1);
    expect(toBinary(2)).toBe(10);
    expect(toBinary(3)).toBe(11);
    expect(toBinary(5)).toBe(101);
  });
});
