import matrixAddition from '.';

describe('matrixAddition', () => {
  it('should add two matrices', () => {
    expect.assertions(3);

    expect(
      matrixAddition(
        [
          [1, 2],
          [1, 2],
        ],
        [
          [2, 3],
          [2, 3],
        ],
      ),
    ).toStrictEqual([
      [3, 5],
      [3, 5],
    ]);
    expect(matrixAddition([[1]], [[2]])).toStrictEqual([[3]]);
    expect(
      matrixAddition(
        [
          [1, 2, 3],
          [3, 2, 1],
          [1, 1, 1],
        ],
        [
          [2, 2, 1],
          [3, 2, 3],
          [1, 1, 3],
        ],
      ),
    ).toStrictEqual([
      [3, 4, 4],
      [6, 4, 4],
      [2, 2, 4],
    ]);
  });
});
