import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import removeRotten from './index.ts';

describe('removeRotten', () => {
  it('should remove all rotten fruits', () => {
    assert.deepEqual(removeRotten(['apple', 'banana', 'kiwi', 'melone', 'orange']), [
      'apple',
      'banana',
      'kiwi',
      'melone',
      'orange',
    ]);
    assert.deepEqual(removeRotten([]), []);
    assert.deepEqual(removeRotten(null), []);
    assert.deepEqual(removeRotten(['apple', 'rottenBanana', 'apple']), [
      'apple',
      'banana',
      'apple',
    ]);
  });
});
