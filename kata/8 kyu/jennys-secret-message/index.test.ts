import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import greet from './index.ts';

describe('jennygreet', () => {
  it('should greet some people normally', () => {
    assert.strictEqual(greet('Jim'), 'Hello, Jim!');
    assert.strictEqual(greet('Jane'), 'Hello, Jane!');
    assert.strictEqual(greet('Simon'), 'Hello, Simon!');
  });

  it('should greet Johnny a little bit more special', () => {
    assert.strictEqual(greet('Johnny'), 'Hello, my love!');
  });
});
