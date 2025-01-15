import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getAge from './index.ts';

describe('getAge', () => {
  it('should return first character as number', () => {
    assert.strictEqual(getAge('4 years old'), 4);
  });
});
