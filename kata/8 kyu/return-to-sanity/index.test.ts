import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import mystery from './index.ts';

describe('mystery', () => {
  it('should return an object', () => {
    assert.deepEqual(mystery(), {
      sanity: 'Hello',
    });
  });
});
