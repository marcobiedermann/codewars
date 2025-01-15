import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import dirReduc from './index.ts';

describe('dirReduc', () => {
  it('should return reduced directions', () => {
    assert.deepEqual(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), [
      'WEST',
    ]);
    assert.deepEqual(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), [
      'NORTH',
      'WEST',
      'SOUTH',
      'EAST',
    ]);
    assert.deepEqual(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);
  });
});
