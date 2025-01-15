import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import billboard from './index.ts';

describe('billboard', () => {
  it('should calculate the billboard ad cost', () => {
    assert.strictEqual(billboard('Jeong-Ho Aristotelis'), 600);
    assert.strictEqual(billboard('Abishai Charalampos'), 570);
    assert.strictEqual(billboard('Idwal Augustin'), 420);
    assert.strictEqual(billboard('Hadufuns John', 20), 260);
    assert.strictEqual(billboard('Zoroaster Donnchadh'), 570);
    assert.strictEqual(billboard('Claude Miljenko'), 450);
    assert.strictEqual(billboard('Werner Vígi', 15), 165);
    assert.strictEqual(billboard('Anani Fridumar'), 420);
    assert.strictEqual(billboard('Paolo Oli'), 270);
    assert.strictEqual(billboard('Hjalmar Liupold', 40), 600);
    assert.strictEqual(billboard('Simon Eadwulf'), 390);
  });
});
