import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import removeEveryOther from './index.ts';

describe('removeEveryOther', () => {
  it('should remove every other element from array', () => {
    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), [
      'Hello',
      'Hello Again',
    ]);
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], { Great: 'Job' }]), [['Goodbye']]);
  });
});
