import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import toWeirdCase from './index.ts';

describe('toWeirdCase', () => {
  it('should return the correct value for a single word', () => {
    assert.strictEqual(toWeirdCase('This'), 'ThIs');
    assert.strictEqual(toWeirdCase('is'), 'Is');
  });

  it('should return the correct value for multiple words', () => {
    assert.strictEqual(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  });
});
