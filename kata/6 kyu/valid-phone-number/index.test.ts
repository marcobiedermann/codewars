import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import validPhoneNumber from './index.ts';

describe('validPhoneNumber', () => {
  it('should check if phone number is valid', () => {
    assert.strictEqual(validPhoneNumber('(123) 456-7890'), true);
  });
});
