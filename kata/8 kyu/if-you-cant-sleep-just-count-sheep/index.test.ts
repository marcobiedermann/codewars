import { describe, expect, it } from 'vitest';
import countSheep from './index.ts';

describe('countSheep', () => {
  it('should return string with a murmur', () => {
    expect.assertions(3);

    expect(countSheep(1)).toBe('1 sheep...');
    expect(countSheep(2)).toBe('1 sheep...2 sheep...');
    expect(countSheep(3)).toBe('1 sheep...2 sheep...3 sheep...');
  });
});
