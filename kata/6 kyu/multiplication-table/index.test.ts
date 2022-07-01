import multiplicationTable from '.';

describe('multiplicationTable', () => {
  it('should create a NxN multiplication table', () => {
    expect(multiplicationTable(3)).toStrictEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });
});
