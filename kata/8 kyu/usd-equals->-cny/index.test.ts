import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import usdcny from './index.ts';

describe('usdcny', () => {
  it('should convert US dollars to Chinese Yuan', () => {
    assert.strictEqual(usdcny(15), '101.25 Chinese Yuan');
    assert.strictEqual(usdcny(465), '3138.75 Chinese Yuan');
  });
});
