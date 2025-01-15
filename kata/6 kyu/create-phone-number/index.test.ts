import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import createPhoneNumber from './index.ts';

describe('createPhoneNumber', () => {
  it('should format array of numbers to phone number', () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), '(111) 111-1111');
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890');
  });
});
