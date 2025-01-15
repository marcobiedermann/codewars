import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { a, b, name } from './index.ts';

describe('variable assignment', () => {
  it('should assign the string to its variable', () => {
    assert.strictEqual(a, 'dev');
    assert.strictEqual(b, 'Lab');
    assert.strictEqual(name, 'devLab');
  });
});
