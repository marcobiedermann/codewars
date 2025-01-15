import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import chromosomeCheck from './index.ts';

describe('chromosomeCheck', () => {
  it('should determin the sex of the offspring', () => {
    assert.strictEqual(chromosomeCheck('XY'), "Congratulations! You're going to have a son.");
    assert.strictEqual(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.");
  });
});
