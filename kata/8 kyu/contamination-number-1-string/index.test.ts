import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import contamination from './index.ts';

describe('contamination', () => {
  it('should mutate the text', () => {
    assert.strictEqual(contamination('abc', 'z'), 'zzz');
    assert.strictEqual(contamination('', 'z'), '');
    assert.strictEqual(contamination('abc', ''), '');
    assert.strictEqual(contamination('_3ebzgh4', '&'), '&&&&&&&&');
    assert.strictEqual(contamination('//case', ' '), '      ');
  });
});
