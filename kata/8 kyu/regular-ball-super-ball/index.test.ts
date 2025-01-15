import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Ball from './index.ts';

describe('ball', () => {
  it('should set `ballType` on instantiation', () => {
    assert.strictEqual(new Ball().ballType, 'regular');
    assert.strictEqual(new Ball('super').ballType, 'super');
  });
});
