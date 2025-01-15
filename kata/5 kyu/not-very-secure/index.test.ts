import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import alphanumeric from './index.ts';

describe('alphanumeric', () => {
  it('should validate if the string is alphanumeric', () => {
    assert.strictEqual(alphanumeric('Mazinkaiser'), true);
    assert.strictEqual(alphanumeric('hello world_'), false);
    assert.strictEqual(alphanumeric('PassW0rd'), true);
    assert.strictEqual(alphanumeric('     '), false);
  });
});
