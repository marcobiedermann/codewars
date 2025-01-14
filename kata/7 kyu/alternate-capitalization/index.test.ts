import { describe, expect, it } from 'vitest';
import capitalize from './index.ts';

describe('capitalize', () => {
  it('should return alternating capitalizated version of string', () => {
    expect.assertions(4);

    expect(capitalize('abcdef')).toStrictEqual(['AbCdEf', 'aBcDeF']);
    expect(capitalize('codewars')).toStrictEqual(['CoDeWaRs', 'cOdEwArS']);
    expect(capitalize('abracadabra')).toStrictEqual(['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    expect(capitalize('codewarriors')).toStrictEqual(['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
  });
});
