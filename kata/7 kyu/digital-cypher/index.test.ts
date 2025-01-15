import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import encode from './index.ts';

describe('encode', () => {
  it('should encode string', () => {
    assert.deepEqual(encode('scout', 1939), [20, 12, 18, 30, 21]);
    assert.deepEqual(encode('masterpiece', 1939), [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);
  });
});
