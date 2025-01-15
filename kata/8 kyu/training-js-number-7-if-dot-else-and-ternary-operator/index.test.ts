import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import saleHotdogs from './index.ts';

describe('saleHotdogs', () => {
  it('should', () => {
    assert.strictEqual(saleHotdogs(1), 100);
    assert.strictEqual(saleHotdogs(4), 400);
    assert.strictEqual(saleHotdogs(5), 475);
    assert.strictEqual(saleHotdogs(9), 855);
    assert.strictEqual(saleHotdogs(10), 900);
    assert.strictEqual(saleHotdogs(100), 9000);
  });
});
