import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import towerBuilder from './index.ts';

describe('towerBuilder', () => {
  it('should build tower', () => {
    assert.deepEqual(towerBuilder(1), ['*']);
    assert.deepEqual(towerBuilder(2), [' * ', '***']);
    assert.deepEqual(towerBuilder(3), ['  *  ', ' *** ', '*****']);
  });
});
