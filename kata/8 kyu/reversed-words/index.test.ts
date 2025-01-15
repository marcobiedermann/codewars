import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import reverseWords from './index.ts';

describe('reverseWords', () => {
  it('should reverse words in string', () => {
    assert.strictEqual(reverseWords('hello world!'), 'world! hello');
    assert.strictEqual(
      reverseWords("yoda doesn't speak like this"),
      "this like speak doesn't yoda",
    );
    assert.strictEqual(reverseWords('foobar'), 'foobar');
    assert.strictEqual(reverseWords('kata editor'), 'editor kata');
    assert.strictEqual(reverseWords('row row row your boat'), 'boat your row row row');
  });
});
