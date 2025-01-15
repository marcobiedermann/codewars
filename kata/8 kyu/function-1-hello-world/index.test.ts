import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import greet from './index.ts';

describe('greet', () => {
  it('is it a function?', () => {
    assert.strictEqual(typeof greet, 'function');
  });

  it('correct return-value?', () => {
    assert.strictEqual(greet(), 'hello world!');
  });
});
