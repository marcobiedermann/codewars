import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import litres from './index.ts';

describe('litres', () => {
  it('should return number of litres', () => {
    assert.strictEqual(litres(2), 1);
    assert.strictEqual(litres(1.4), 0);
    assert.strictEqual(litres(12.3), 6);
    assert.strictEqual(litres(0.82), 0);
    assert.strictEqual(litres(11.8), 5);
    assert.strictEqual(litres(1787), 893);
    assert.strictEqual(litres(0), 0);
  });
});
