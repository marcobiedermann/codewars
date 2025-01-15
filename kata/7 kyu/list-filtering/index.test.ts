/* eslint-disable camelcase */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import filter_list from './index.ts';

describe('filter_list', () => {
  it('should return list of integers', () => {
    assert.deepEqual(filter_list([1, 2, 'a', 'b']), [1, 2]);
    assert.deepEqual(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15]);
    assert.deepEqual(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]);
  });
});
