import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import narcissistic from './index.ts';

describe('narcissistic', () => {
  it('should find small numbers are all narcissistic', () => {
    assert.strictEqual(narcissistic(7), true);
  });

  it('should find these numbers are narcissistic', () => {
    assert.strictEqual(narcissistic(371), true);
  });
});
