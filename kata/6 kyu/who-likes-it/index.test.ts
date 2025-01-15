import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import likes from './index.ts';

describe('likes', () => {
  it('should return test of liked people', () => {
    assert.strictEqual(likes([]), 'no one likes this');
    assert.strictEqual(likes(['Peter']), 'Peter likes this');
    assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.strictEqual(
      likes(['Alex', 'Jacob', 'Mark', 'Max']),
      'Alex, Jacob and 2 others like this',
    );
  });
});
