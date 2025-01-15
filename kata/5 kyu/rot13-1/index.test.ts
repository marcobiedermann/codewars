import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import rot13 from './index.ts';

describe('rot13', () => {
  it('should rotate letters in string', () => {
    assert.strictEqual(rot13('test'), 'grfg');
    assert.strictEqual(rot13('Test'), 'Grfg');
  });
});
