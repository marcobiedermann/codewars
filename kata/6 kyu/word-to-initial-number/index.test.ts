import { expect } from 'vitest';
import convert from '.';

describe('convert', () => {
  it('should convert the word to number', () => {
    expect(convert('CodeWars')).toBe(10234567);
    expect(convert('KATA')).toBe(1020);
  });
});
