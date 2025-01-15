import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getCount from './index.ts';

describe('getCount', () => {
  it('should count vowels in string', () => {
    assert.strictEqual(getCount('abracadabra'), 5);
  });
});
