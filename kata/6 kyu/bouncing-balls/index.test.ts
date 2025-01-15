import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import bouncingBall from './index.ts';

describe('bouncingBall', () => {
  it('should count bounces of ball', () => {
    assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
  });
});
