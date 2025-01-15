import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import XO from './index.ts';

describe('xo', () => {
  it('should check if string has the same amount of `x`s and `o`s', () => {
    assert.strictEqual(XO('xo'), true);
    assert.strictEqual(XO('xxOo'), true);
    assert.strictEqual(XO('xxxm'), false);
    assert.strictEqual(XO('Oo'), false);
    assert.strictEqual(XO('ooom'), false);
  });
});
