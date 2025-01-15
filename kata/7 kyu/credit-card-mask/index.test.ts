import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import maskify from './index.ts';

describe('maskify', () => {
  it('should change all but last four characters into `#`', () => {
    assert.strictEqual(maskify('4556364607935616'), '############5616');
    assert.strictEqual(maskify('1'), '1');
    assert.strictEqual(maskify('11111'), '#1111');
  });
});
