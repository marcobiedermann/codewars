import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import capitalize from './index.ts';

describe('capitalize', () => {
  it('should return alternating capitalizated version of string', () => {
    assert.deepEqual(capitalize('abcdef'), ['AbCdEf', 'aBcDeF']);
    assert.deepEqual(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS']);
    assert.deepEqual(capitalize('abracadabra'), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    assert.deepEqual(capitalize('codewarriors'), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
  });
});
