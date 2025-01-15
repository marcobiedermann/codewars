import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import expandedForm from './index.ts';

describe('expandedForm', () => {
  it('should return number in expanded form', () => {
    assert.strictEqual(expandedForm(12), '10 + 2');
    assert.strictEqual(expandedForm(42), '40 + 2');
    assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
  });
});
