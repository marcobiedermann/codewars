import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import whoIsPaying from './index.ts';

describe('whoIsPaying', () => {
  it('should truncate string to max two letters', () => {
    assert.deepEqual(whoIsPaying('Mexico'), ['Mexico', 'Me']);
    assert.deepEqual(whoIsPaying('Melania'), ['Melania', 'Me']);
    assert.deepEqual(whoIsPaying('Melissa'), ['Melissa', 'Me']);
    assert.deepEqual(whoIsPaying('Me'), ['Me']);
    assert.deepEqual(whoIsPaying(''), ['']);
    assert.deepEqual(whoIsPaying('I'), ['I']);
  });
});
