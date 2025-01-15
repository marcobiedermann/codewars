import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import calc from './index.ts';

describe('calc', () => {
  it('should calculate the diff of its ascii representation', () => {
    assert.strictEqual(calc('abcdef'), 6);
    assert.strictEqual(calc('ifkhchlhfd'), 6);
    assert.strictEqual(calc('aaaaaddddr'), 30);
    assert.strictEqual(calc('jfmgklf8hglbe'), 6);
    assert.strictEqual(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
  });
});
