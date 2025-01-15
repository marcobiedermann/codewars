import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import remove from './index.ts';

describe('remove', () => {
  it('should remove exclamation mark from the end of string', () => {
    assert.strictEqual(remove('Hi!'), 'Hi');
    assert.strictEqual(remove('Hi!!!'), 'Hi!!');
    assert.strictEqual(remove('!Hi'), '!Hi');
    assert.strictEqual(remove('!Hi!'), '!Hi');
    assert.strictEqual(remove('Hi! Hi!'), 'Hi! Hi');
    assert.strictEqual(remove('Hi'), 'Hi');
  });
});
