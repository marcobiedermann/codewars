import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import parseF from './index.ts';

describe('parseF', () => {
  it('should parse string to float', () => {
    assert.strictEqual(parseF('1'), 1.0);
    assert.strictEqual(parseF('A'), null);
  });
});
