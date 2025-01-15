import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import capitalize from './index.ts';

describe('capitalize', () => {
  it('should capitalize all letters at the given indices', () => {
    assert.strictEqual(capitalize('abcdef', [1, 2, 5]), 'aBCdeF');
    assert.strictEqual(capitalize('abcdef', [1, 2, 5, 100]), 'aBCdeF');
    assert.strictEqual(capitalize('codewars', [1, 3, 5, 50]), 'cOdEwArs');
    assert.strictEqual(capitalize('abracadabra', [2, 6, 9, 10]), 'abRacaDabRA');
    assert.strictEqual(capitalize('codewarriors', [5]), 'codewArriors');
    assert.strictEqual(capitalize('indexinglessons', [0]), 'Indexinglessons');
  });
});
