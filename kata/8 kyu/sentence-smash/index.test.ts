import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import smash from './index.ts';

describe('smash', () => {
  it('should smash words together', () => {
    assert.strictEqual(smash(['hello']), 'hello');
    assert.strictEqual(smash(['hello', 'world']), 'hello world');
  });
});
