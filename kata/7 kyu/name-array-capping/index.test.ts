import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import capMe from './index.ts';

describe('capMe', () => {
  it('should capitalize each name in the array', () => {
    assert.deepEqual(capMe(['jo', 'nelson', 'jurie']), ['Jo', 'Nelson', 'Jurie']);
    assert.deepEqual(capMe(['KARLY', 'DANIEL', 'KELSEY']), ['Karly', 'Daniel', 'Kelsey']);
  });
});
