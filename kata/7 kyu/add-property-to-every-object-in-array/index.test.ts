import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import questions from './index.ts';

describe('questions', () => {
  it('should add a new property to every object in the array', () => {
    assert.strictEqual(questions[0].usersAnswer, null);
  });
});
