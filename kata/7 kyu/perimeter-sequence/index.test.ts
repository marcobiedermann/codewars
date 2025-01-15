import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import perimeterSequence from './index.ts';

describe('perimeterSequence', () => {
  it('should calculate the perimeter of the `nth` shape', () => {
    assert.strictEqual(perimeterSequence(1, 3), 12);
  });
});
