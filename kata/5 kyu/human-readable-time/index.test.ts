import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import humanReadable from './index.ts';

describe('humanReadable', () => {
  it('should return the time in a human-readable format', () => {
    assert.strictEqual(humanReadable(0), '00:00:00');
    assert.strictEqual(humanReadable(5), '00:00:05');
    assert.strictEqual(humanReadable(60), '00:01:00');
    assert.strictEqual(humanReadable(86399), '23:59:59');
    assert.strictEqual(humanReadable(359999), '99:59:59');
  });
});
