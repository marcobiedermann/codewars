import quarterOf from '.';

describe('quarterOf', () => {
  it('should return the quarter of month', () => {
    expect.assertions(3);

    expect(quarterOf(3)).toStrictEqual(1);
    expect(quarterOf(8)).toStrictEqual(3);
    expect(quarterOf(11)).toStrictEqual(4);
  });
});
