import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import generateShape from './index.ts';

describe('generateShape', () => {
  it('should generate a square that is as long and wide as the integer', () => {
    assert.strictEqual(
      generateShape(8),
      '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++',
    );
  });
});
