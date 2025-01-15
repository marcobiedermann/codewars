import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import solve from './index.ts';

describe('solve', () => {
  it('should return an array of the number of letters that occupy their positions in the alphabet', () => {
    assert.deepEqual(solve(['abode', 'ABc', 'xyzD']), [4, 3, 1]);
    assert.deepEqual(solve(['abide', 'ABc', 'xyz']), [4, 3, 0]);
    assert.deepEqual(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']), [6, 5, 7]);
    assert.deepEqual(solve(['encode', 'abc', 'xyzD', 'ABmD']), [1, 3, 1, 3]);
  });
});
