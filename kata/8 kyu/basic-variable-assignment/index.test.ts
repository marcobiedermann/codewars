import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import name from './index.ts';

describe('name', () => {
  it('should concatenate two strings', () => {
    assert.strictEqual(name, 'codewa.rs');
  });
});
