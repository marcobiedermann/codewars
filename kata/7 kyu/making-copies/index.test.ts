import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import copyList from './index.ts';

describe('copyList', () => {
  it('should create a copy', () => {
    const t = [1, 2, 3, 4];
    const tCopy = copyList(t);

    assert.deepEqual(t, tCopy);
    t[1] += 5;
    assert.notDeepEqual(t, tCopy);
  });
});
