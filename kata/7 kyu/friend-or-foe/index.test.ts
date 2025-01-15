import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import friend from './index.ts';

describe('friend', () => {
  it('should filter names by length of 4', () => {
    assert.deepEqual(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']);
    assert.deepEqual(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']), ['Ryan']);
    assert.deepEqual(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']), [
      'Jimm',
      'Cari',
      'aret',
    ]);
    assert.deepEqual(friend(['Love', 'Your', 'Face', '1']), ['Love', 'Your', 'Face']);
  });
});
