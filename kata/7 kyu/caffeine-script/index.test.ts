import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import caffeineBuzz from './index.ts';

describe('caffeineBuzz', () => {
  it('should return caffein script', () => {
    assert.strictEqual(caffeineBuzz(1), 'mocha_missing!');
    assert.strictEqual(caffeineBuzz(3), 'Java');
    assert.strictEqual(caffeineBuzz(6), 'JavaScript');
    assert.strictEqual(caffeineBuzz(12), 'CoffeeScript');
  });
});
