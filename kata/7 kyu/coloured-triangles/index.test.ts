import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import triangle from './index.ts';

describe('triangle', () => {
  it('should', () => {
    assert.strictEqual(triangle('GB'), 'R');
    assert.strictEqual(triangle('RRR'), 'R');
    assert.strictEqual(triangle('RGBG'), 'B');
    assert.strictEqual(triangle('RBRGBRB'), 'G');
    assert.strictEqual(triangle('RBRGBRBGGRRRBGBBBGG'), 'G');
    assert.strictEqual(triangle('B'), 'B');
  });
});
