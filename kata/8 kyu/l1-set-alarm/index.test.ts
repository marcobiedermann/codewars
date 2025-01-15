import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import setAlarm from './index.ts';

describe('setAlarm', () => {
  it('should return true if you are employed and not on vacation', () => {
    assert.strictEqual(setAlarm(true, true), false);
    assert.strictEqual(setAlarm(false, true), false);
    assert.strictEqual(setAlarm(true, false), true);
  });
});
