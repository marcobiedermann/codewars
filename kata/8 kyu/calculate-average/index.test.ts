/* eslint-disable camelcase */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import find_average from './index.ts';

describe('find_average', () => {
  it('should calculate average of numbers', () => {
    assert.strictEqual(find_average([1, 1, 1]), 1);
    assert.strictEqual(find_average([1, 2, 3]), 2);
  });
});
