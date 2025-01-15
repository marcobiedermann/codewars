import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import SeriesSum from './index.ts';

describe('seriesSum', () => {
  it('should sum series up to nth term', () => {
    assert.strictEqual(SeriesSum(1), '1.00');
    assert.strictEqual(SeriesSum(2), '1.25');
    assert.strictEqual(SeriesSum(3), '1.39');
    assert.strictEqual(SeriesSum(4), '1.49');
  });
});
