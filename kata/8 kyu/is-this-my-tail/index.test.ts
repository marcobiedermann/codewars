import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import correctTail from './index.ts';

describe('assertEquals', () => {
  it('should check if character is last in string', () => {
    assert.strictEqual(correctTail('Fox', 'x'), true);
    assert.strictEqual(correctTail('Rhino', 'o'), true);
    assert.strictEqual(correctTail('Meerkat', 't'), true);
  });
});
