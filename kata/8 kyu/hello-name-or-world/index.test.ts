import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import hello from './index.ts';

describe('hello', () => {
  it('should return `Hello, world!` or `Hello, name!`', () => {
    assert.strictEqual(hello('johN'), 'Hello, John!');
    assert.strictEqual(hello('alice'), 'Hello, Alice!');
    assert.strictEqual(hello(), 'Hello, World!');
    assert.strictEqual(hello(''), 'Hello, World!');
  });
});
