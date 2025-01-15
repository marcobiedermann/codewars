import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import grader from './index.ts';

describe('grader', () => {
  it('should return a grade based on the score', () => {
    assert.strictEqual(grader(0), 'F');
    assert.strictEqual(grader(1.1), 'F');
    assert.strictEqual(grader(0.9), 'A');
    assert.strictEqual(grader(0.8), 'B');
    assert.strictEqual(grader(0.7), 'C');
    assert.strictEqual(grader(0.6), 'D');
  });
});
