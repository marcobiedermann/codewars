import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import digit from './index.ts';

describe('digit', () => {
  it('should check if value is digit', () => {
    assert.strictEqual(digit(''), false);
    assert.strictEqual(digit('7'), true);
    assert.strictEqual(digit(' '), false);
    assert.strictEqual(digit('a'), false);
    assert.strictEqual(digit('a5'), false);
    assert.strictEqual(digit('14'), false);
  });
});
