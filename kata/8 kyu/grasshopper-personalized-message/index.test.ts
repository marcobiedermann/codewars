import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import greet from './index.ts';

describe('greet', () => {
  it('should greet boss or guest', () => {
    assert.strictEqual(greet('Daniel', 'Daniel'), 'Hello boss');
    assert.strictEqual(greet('Greg', 'Daniel'), 'Hello guest');
  });
});
