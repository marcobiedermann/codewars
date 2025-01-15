import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import findLongest from './index.ts';

describe('findLongest', () => {
  it('should return longest word as a number', () => {
    assert.strictEqual(findLongest('The quick white fox jumped around the massive dog'), 7);
    assert.strictEqual(findLongest('Take me to tinseltown with you'), 10);
    assert.strictEqual(findLongest('Sausage chops'), 7);
    assert.strictEqual(findLongest('Wind your body and wiggle your belly'), 6);
    assert.strictEqual(findLongest('Lets all go on holiday'), 7);
  });
});
