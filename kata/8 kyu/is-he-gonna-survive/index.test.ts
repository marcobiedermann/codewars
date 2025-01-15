import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import hero from './index.ts';

describe('hero', () => {
  it('should check if hero has enough bullets to survive', () => {
    assert.strictEqual(hero(10, 5), true);
    assert.strictEqual(hero(7, 4), false);
    assert.strictEqual(hero(4, 5), false);
    assert.strictEqual(hero(100, 40), true);
    assert.strictEqual(hero(1500, 751), false);
    assert.strictEqual(hero(0, 1), false);
  });
});
