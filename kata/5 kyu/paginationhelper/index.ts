class PaginationHelper<T> {
  private collection: T[];

  private itemsPerPage: number;

  constructor(collection: T[], itemsPerPage: number) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount(): number {
    return this.collection.length;
  }

  pageCount(): number {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  pageItemCount(pageIndex: number): number {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }

    return Math.min(this.itemsPerPage, this.itemCount() - this.itemsPerPage * pageIndex);
  }

  pageIndex(itemIndex: number): number {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

export default PaginationHelper;
