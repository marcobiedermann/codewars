import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getPlanetName from './index.ts';

describe('getPlanetName', () => {
  it('should return planet name by ID', () => {
    assert.strictEqual(getPlanetName(0), 'ID does not match');
    assert.strictEqual(getPlanetName(1), 'Mercury');
    assert.strictEqual(getPlanetName(2), 'Venus');
    assert.strictEqual(getPlanetName(3), 'Earth');
    assert.strictEqual(getPlanetName(4), 'Mars');
    assert.strictEqual(getPlanetName(5), 'Jupiter');
    assert.strictEqual(getPlanetName(6), 'Saturn');
    assert.strictEqual(getPlanetName(7), 'Uranus');
    assert.strictEqual(getPlanetName(8), 'Neptune');
  });
});
