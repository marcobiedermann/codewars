import lovefunc from '.';

describe('lovefunc', () => {
  it('should check if one number is odd and one is even', () => {
    expect.assertions(4);

    expect(lovefunc(1, 4)).toStrictEqual(true);
    expect(lovefunc(2, 2)).toStrictEqual(false);
    expect(lovefunc(0, 1)).toStrictEqual(true);
    expect(lovefunc(0, 0)).toStrictEqual(false);
  });
});
