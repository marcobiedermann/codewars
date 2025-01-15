import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import removeDuplicateWords from './index.ts';

describe('removeDuplicateWords', () => {
  it('should remove duplicate words', () => {
    assert.strictEqual(
      removeDuplicateWords(
        'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta',
      ),
      'alpha beta gamma delta',
    );
  });
});
