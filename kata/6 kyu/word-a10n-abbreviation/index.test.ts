import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import abbreviate from './index.ts';

describe('abbreviate', () => {
  it('should turn words into an abbreviation', () => {
    assert.strictEqual(abbreviate('internationalization'), 'i18n');
    assert.strictEqual(abbreviate('accessibility'), 'a11y');
    assert.strictEqual(abbreviate('Accessibility'), 'A11y');
    assert.strictEqual(abbreviate('elephant-ride'), 'e6t-r2e');
  });
});
