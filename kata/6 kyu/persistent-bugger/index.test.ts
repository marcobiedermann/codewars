import persistence from '.';

describe('persistence', () => {
  it('should multiply digits until it reach a single digit', () => {
    expect.assertions(4);

    expect(persistence(39)).toStrictEqual(3);
    expect(persistence(4)).toStrictEqual(0);
    expect(persistence(25)).toStrictEqual(2);
    expect(persistence(999)).toStrictEqual(4);
  });
});
