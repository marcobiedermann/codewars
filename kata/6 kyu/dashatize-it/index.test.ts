import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import dashatize from './index.ts';

describe('dashatize', () => {
  it('should place a dash between each odd number', () => {
    assert.strictEqual(dashatize(274), '2-7-4');
    assert.strictEqual(dashatize(5311), '5-3-1-1');
    assert.strictEqual(dashatize(86320), '86-3-20');
    assert.strictEqual(dashatize(974302), '9-7-4-3-02');
    assert.strictEqual(dashatize(NaN), 'NaN');
    assert.strictEqual(dashatize(0), '0');
    assert.strictEqual(dashatize(-1), '1');
    assert.strictEqual(dashatize(-28369), '28-3-6-9');
  });
});
