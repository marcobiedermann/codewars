import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import stringToArray from './index.ts';

describe('stringToArray', () => {
  it('should covert string into words', () => {
    assert.deepEqual(stringToArray('Robin Singh'), ['Robin', 'Singh']);
    assert.deepEqual(stringToArray('I love arrays they are my favorite'), [
      'I',
      'love',
      'arrays',
      'they',
      'are',
      'my',
      'favorite',
    ]);
  });
});
