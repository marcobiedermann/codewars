import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import high from './index.ts';

describe('high', () => {
  it('should return highest scoring word', () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano');
    assert.strictEqual(high('take me to semynak'), 'semynak');
  });
});
