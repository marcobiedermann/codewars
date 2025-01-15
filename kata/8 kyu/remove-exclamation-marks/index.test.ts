import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import removeExclamationMarks from './index.ts';

describe('removeExclamationMarks', () => {
  it('should remove exclamation marks from string', () => {
    assert.strictEqual(removeExclamationMarks('Hello World!'), 'Hello World');
  });
});
