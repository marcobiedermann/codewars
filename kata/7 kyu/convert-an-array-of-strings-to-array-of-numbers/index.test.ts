import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import toNumberArray from './index.ts';

describe('toNumberArray', () => {
  it('should convert convert an array of strings to an array of numbers', () => {
    assert.deepEqual(toNumberArray(['1.1', '2.2', '3.3']), [1.1, 2.2, 3.3]);
  });
});
