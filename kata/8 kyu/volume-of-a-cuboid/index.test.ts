import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Kata from './index.ts';

describe('getVolumeOfCuboid', () => {
  it('should calculate volume of cuboid', () => {
    assert.strictEqual(Kata.getVolumeOfCuboid(1, 2, 2), 4);
    assert.strictEqual(Kata.getVolumeOfCuboid(6.3, 2, 5), 63);
  });
});
