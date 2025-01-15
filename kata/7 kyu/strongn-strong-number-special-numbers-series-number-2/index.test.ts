import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import strong from './index.ts';

describe('strong', () => {
  it('should check if it is a strong number', () => {
    assert.strictEqual(strong(1), 'STRONG!!!!');
    assert.strictEqual(strong(2), 'STRONG!!!!');
    assert.strictEqual(strong(145), 'STRONG!!!!');
    assert.strictEqual(strong(7), 'Not Strong !!');
    assert.strictEqual(strong(93), 'Not Strong !!');
    assert.strictEqual(strong(185), 'Not Strong !!');
  });
});
