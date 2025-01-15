import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import booleanToString from './index.ts';

describe('booleanToString', () => {
  it('should convert boolean to string', () => {
    assert.strictEqual(booleanToString(true), 'true');
    assert.strictEqual(booleanToString(false), 'false');
  });
});
