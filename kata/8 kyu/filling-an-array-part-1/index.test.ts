import arr from '.';

describe('arr', () => {
  it('should return an array', () => {
    expect.assertions(1);

    expect(arr()).toBeInstanceOf(Array);
  });

  it('should return a blank array when called with no argument', () => {
    expect.assertions(1);

    expect(arr()).toStrictEqual([]);
  });

  it('should return 0 to 3 when called with 4', () => {
    expect.assertions(1);

    expect(arr(4)).toStrictEqual([0, 1, 2, 3]);
  });
});
