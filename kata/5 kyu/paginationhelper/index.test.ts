import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import PaginationHelper from './index.ts';

describe('paginationHelper', () => {
  it('should query paging information', () => {
    const paginationHelper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

    assert.strictEqual(paginationHelper.pageCount(), 2);
    assert.strictEqual(paginationHelper.itemCount(), 6);
    assert.strictEqual(paginationHelper.pageItemCount(0), 4);
    assert.strictEqual(paginationHelper.pageItemCount(1), 2);
    assert.strictEqual(paginationHelper.pageItemCount(2), -1);

    assert.strictEqual(paginationHelper.pageIndex(5), 1);
    assert.strictEqual(paginationHelper.pageIndex(2), 0);
    assert.strictEqual(paginationHelper.pageIndex(20), -1);
    assert.strictEqual(paginationHelper.pageIndex(-10), -1);
  });
});
