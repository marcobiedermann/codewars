import { describe, expect, it } from 'vitest';
import getDivisorsCnt from '.';

describe('getDivisorsCnt', () => {
  it('should count number of divisors', () => {
    expect.assertions(4);

    expect(getDivisorsCnt(1)).toBe(1);
    expect(getDivisorsCnt(10)).toBe(4);
    expect(getDivisorsCnt(11)).toBe(2);
    expect(getDivisorsCnt(54)).toBe(8);
  });
});
