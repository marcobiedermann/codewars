import { describe, expect, it } from 'vitest';
import sakuraFall from './index.ts';

describe('sakuraFall', () => {
  it('should return time it takes to reach the ground', () => {
    expect.assertions(3);

    expect(sakuraFall(5)).toBe(80);
    expect(sakuraFall(10)).toBe(40);
    expect(sakuraFall(-1)).toBe(0);
  });
});
