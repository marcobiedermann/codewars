import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import capitals from './index.ts';

describe('capitals', () => {
  it('should return list of indexed of all capital letters', () => {
    assert.deepEqual(capitals('CodEWaRs'), [0, 3, 4, 6]);
  });
});
