import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import rainAmount from './index.ts';

describe('rainAmount', () => {
  it('should report if your plant needs water', () => {
    assert.strictEqual(rainAmount(100), 'Your plant has had more than enough water for today!');
    assert.strictEqual(rainAmount(39), 'You need to give your plant 1mm of water');
  });
});
