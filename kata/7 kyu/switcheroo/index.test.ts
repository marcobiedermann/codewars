import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import switcheroo from './index.ts';

describe('switcheroo', () => {
  it('should switch all `a` to `b` and vise versa', () => {
    assert.strictEqual(switcheroo('abc'), 'bac');
    assert.strictEqual(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
    assert.strictEqual(switcheroo('ccccc'), 'ccccc');
  });
});
