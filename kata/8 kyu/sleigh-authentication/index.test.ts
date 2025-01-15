import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Sleigh from './index.ts';

describe('sleigh', () => {
  const sleigh = new Sleigh();

  describe('authenticate', () => {
    it('must authenticate with correct credentials', () => {
      assert.strictEqual(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!'), true);
    });

    it('must not authenticate with incorrect credentials', () => {
      assert.strictEqual(sleigh.authenticate('Santa', 'Ho Ho Ho!'), false);
      assert.strictEqual(sleigh.authenticate('Santa Claus', 'Ho Ho!'), false);
      assert.strictEqual(sleigh.authenticate('jhoffner', 'CodeWars'), false);
    });
  });
});
