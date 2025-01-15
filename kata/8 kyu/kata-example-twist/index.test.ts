import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import websites from './index.ts';

describe('websites', () => {
  it('should store the value `codewars` 1000 times', () => {
    assert.strictEqual(websites.length > 0, true);
    assert.strictEqual(websites.length, 1000);
    assert.strictEqual(
      websites.every((website) => website === 'codewars'),
      true,
    );
  });
});
