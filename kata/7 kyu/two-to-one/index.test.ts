import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import longest from './index.ts';

describe('longest', () => {
  it('should return a new sorted string containing distinct letters', () => {
    assert.strictEqual(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
    assert.strictEqual(
      longest('loopingisfunbutdangerous', 'lessdangerousthancoding'),
      'abcdefghilnoprstu',
    );
    assert.strictEqual(longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');
  });
});
