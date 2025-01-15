import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import warnTheSheep from './index.ts';

describe('warnTheSheep', () => {
  it('should warn sheep in front of wolf', () => {
    assert.strictEqual(
      warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']),
      'Oi! Sheep number 2! You are about to be eaten by a wolf!',
    );
    assert.strictEqual(
      warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
      'Oi! Sheep number 5! You are about to be eaten by a wolf!',
    );
    assert.strictEqual(
      warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']),
      'Oi! Sheep number 6! You are about to be eaten by a wolf!',
    );
    assert.strictEqual(
      warnTheSheep(['sheep', 'wolf', 'sheep']),
      'Oi! Sheep number 1! You are about to be eaten by a wolf!',
    );
    assert.strictEqual(
      warnTheSheep(['sheep', 'sheep', 'wolf']),
      'Pls go away and stop eating my sheep',
    );
  });
});
