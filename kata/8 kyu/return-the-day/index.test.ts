import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import whatday from './index.ts';

describe('whatday', () => {
  it('should return the weekday', () => {
    assert.strictEqual(whatday(1), 'Sunday');
    assert.strictEqual(whatday(2), 'Monday');
    assert.strictEqual(whatday(3), 'Tuesday');
    assert.strictEqual(whatday(8), 'Wrong, please enter a number between 1 and 7');
    assert.strictEqual(whatday(20), 'Wrong, please enter a number between 1 and 7');
  });
});
