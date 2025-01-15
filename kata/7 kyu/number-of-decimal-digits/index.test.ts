import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import digits from './index.ts';

describe('digits', () => {
  it('should count the number of digits in number', () => {
    assert.strictEqual(digits(5), 1);
    assert.strictEqual(digits(12345), 5);
    assert.strictEqual(digits(9876543210), 10);
  });
});
