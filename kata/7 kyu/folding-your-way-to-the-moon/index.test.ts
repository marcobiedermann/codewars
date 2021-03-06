import foldTo from '.';

describe('foldTo', () => {
  it('should calculate number of folds to reach distance', () => {
    expect.assertions(3);

    expect(foldTo(-1)).toBeNull();
    expect(foldTo(1, 2)).toStrictEqual(0);
    expect(foldTo(384000000)).toStrictEqual(42);
  });
});
