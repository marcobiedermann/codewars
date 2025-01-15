import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import duckDuckGoose, { Player } from './index.ts';

const exNames = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z'];
const players = exNames.map((n) => new Player(n));

describe('duckDuckGoose', () => {
  it('should find the correct goose', () => {
    assert.strictEqual(duckDuckGoose(players, 1), 'a');
    assert.strictEqual(duckDuckGoose(players, 3), 'c');
    assert.strictEqual(duckDuckGoose(players, 10), 'z');
    assert.strictEqual(duckDuckGoose(players, 20), 'z');
    assert.strictEqual(duckDuckGoose(players, 30), 'z');
    assert.strictEqual(duckDuckGoose(players, 18), 'g');
    assert.strictEqual(duckDuckGoose(players, 28), 'g');
    assert.strictEqual(duckDuckGoose(players, 12), 'b');
    assert.strictEqual(duckDuckGoose(players, 2), 'b');
    assert.strictEqual(duckDuckGoose(players, 7), 'f');
  });
});
