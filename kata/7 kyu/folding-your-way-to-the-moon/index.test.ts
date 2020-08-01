import foldTo from '.';

describe('foldTo', () => {
  it('should calculate number of folds to reach distance', () => {
    expect.assertions(1);

    expect(foldTo(384000000)).toStrictEqual(42);
  });
});
