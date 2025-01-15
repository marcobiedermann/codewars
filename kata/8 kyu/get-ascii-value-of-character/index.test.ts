import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getASCII from './index.ts';

describe('getASCII', () => {
  it('should return the ASCII code of a character', () => {
    assert.strictEqual(getASCII('A'), 65);
    assert.strictEqual(getASCII(' '), 32);
    assert.strictEqual(getASCII('!'), 33);
  });
});
