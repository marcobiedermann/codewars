import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import explode from './index.ts';

describe('explode', () => {
  it('should return digit by its value', () => {
    assert.strictEqual(explode('312'), '333122');
    assert.strictEqual(explode('102269'), '12222666666999999999');
    assert.strictEqual(explode('0'), '');
    assert.strictEqual(explode('000'), '');
    assert.strictEqual(explode('123'), '122333');
  });
});
