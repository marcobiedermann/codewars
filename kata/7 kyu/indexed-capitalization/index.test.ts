import { describe, expect, it } from 'vitest';
import capitalize from './index.ts';

describe('capitalize', () => {
  it('should capitalize all letters at the given indices', () => {
    expect.assertions(6);

    expect(capitalize('abcdef', [1, 2, 5])).toBe('aBCdeF');
    expect(capitalize('abcdef', [1, 2, 5, 100])).toBe('aBCdeF');
    expect(capitalize('codewars', [1, 3, 5, 50])).toBe('cOdEwArs');
    expect(capitalize('abracadabra', [2, 6, 9, 10])).toBe('abRacaDabRA');
    expect(capitalize('codewarriors', [5])).toBe('codewArriors');
    expect(capitalize('indexinglessons', [0])).toBe('Indexinglessons');
  });
});
