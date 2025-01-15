import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import titleCase from './index.ts';

describe('titleCase', () => {
  it('should return string in titlecase', () => {
    assert.strictEqual(titleCase(''), '');
    assert.strictEqual(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
    assert.strictEqual(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows');
    assert.strictEqual(titleCase('the quick brown fox'), 'The Quick Brown Fox');
  });
});
