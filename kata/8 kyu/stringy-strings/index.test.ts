import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import stringy from './index.ts';

describe('stringy', () => {
  it('should return a string', () => {
    assert.strictEqual(typeof stringy(3), 'string');
  });

  it('should start with a 1', () => {
    assert.strictEqual(stringy(3)[0], '1');
  });

  it('should have the correct length', () => {
    for (let i = 0; i < 10; i += 1) {
      const parameter = Math.floor(Math.random() * 50 + 1);

      assert.strictEqual(stringy(parameter).length, parameter);
    }
  });
});
