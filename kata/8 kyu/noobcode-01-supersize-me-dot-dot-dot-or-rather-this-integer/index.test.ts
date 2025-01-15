import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import superSize from './index.ts';

describe('superSize', () => {
  it('should rearrange integer into largest possible value', () => {
    assert.strictEqual(superSize(69), 96);
    assert.strictEqual(superSize(513), 531);
    assert.strictEqual(superSize(2017), 7210);
    assert.strictEqual(superSize(414), 441);
    assert.strictEqual(superSize(608719), 987610);
    assert.strictEqual(superSize(123456789), 987654321);
    assert.strictEqual(superSize(700000000001), 710000000000);
    assert.strictEqual(superSize(666666), 666666);
    assert.strictEqual(superSize(2), 2);
  });
});
