import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import vowel from './index.ts';

describe('vowel', () => {
  it('should check if the string is a vowel', () => {
    assert.strictEqual(vowel(''), false);
    assert.strictEqual(vowel('a'), true);
    assert.strictEqual(vowel('E'), true);
    assert.strictEqual(vowel('ou'), false);
    assert.strictEqual(vowel('z'), false);
    assert.strictEqual(vowel('lol'), false);
  });
});
