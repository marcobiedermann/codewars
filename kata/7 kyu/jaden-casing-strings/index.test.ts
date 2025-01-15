import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import toJadenCase from './index.ts';

describe('toJadenCase', () => {
  it('should transform string', () => {
    assert.strictEqual(
      toJadenCase("How can mirrors be real if our eyes aren't real"),
      "How Can Mirrors Be Real If Our Eyes Aren't Real",
    );
  });
});
