import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import shortenToDate from './index.ts';

describe('shortenToDate', () => {
  it('should remove the time from date', () => {
    assert.strictEqual(shortenToDate('Friday May 2, 9am'), 'Friday May 2');
    assert.strictEqual(shortenToDate('Tuesday January 29, 10pm'), 'Tuesday January 29');
    assert.strictEqual(shortenToDate('Monday December 25, 10pm'), 'Monday December 25');
  });
});
