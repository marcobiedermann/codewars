import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import addLength from './index.ts';

describe('addLength', () => {
  it('should count length of words separated by space', () => {
    assert.deepEqual(addLength('apple ban'), ['apple 5', 'ban 3']);
    assert.deepEqual(addLength('you will win'), ['you 3', 'will 4', 'win 3']);
  });
});
