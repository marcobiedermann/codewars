import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import sumStrings from './index.ts';

describe('sumStrings', () => {
  it('should sum two strings', () => {
    assert.strictEqual(sumStrings('123', '456'), '579');
  });
});
