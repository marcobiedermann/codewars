import PaginationHelper from '.';

describe('paginationHelper', () => {
  it('should query paging information', () => {
    expect.assertions(9);

    const paginationHelper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

    expect(paginationHelper.pageCount()).toBe(2);
    expect(paginationHelper.itemCount()).toBe(6);
    expect(paginationHelper.pageItemCount(0)).toBe(4);
    expect(paginationHelper.pageItemCount(1)).toBe(2);
    expect(paginationHelper.pageItemCount(2)).toStrictEqual(-1);

    expect(paginationHelper.pageIndex(5)).toBe(1);
    expect(paginationHelper.pageIndex(2)).toBe(0);
    expect(paginationHelper.pageIndex(20)).toStrictEqual(-1);
    expect(paginationHelper.pageIndex(-10)).toStrictEqual(-1);
  });
});
