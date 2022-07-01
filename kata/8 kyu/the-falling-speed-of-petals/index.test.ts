import { expect } from 'vitest';
import sakuraFall from '.';

describe('sakuraFall', () => {
  it('should return time it takes to reach the ground', () => {
    expect(sakuraFall(5)).toBe(80);
    expect(sakuraFall(10)).toBe(40);
    expect(sakuraFall(-1)).toBe(0);
  });
});
