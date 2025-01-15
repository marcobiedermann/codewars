/* eslint-disable camelcase */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import digital_root from './index.ts';

describe('foo', () => {
  it('should sum digits until a single-digit number is produced', () => {
    assert.strictEqual(digital_root(16), 7);
    assert.strictEqual(digital_root(456), 6);
  });
});
