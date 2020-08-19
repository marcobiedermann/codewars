import nextId from '.';

describe('nextId', () => {
  it('should', () => {
    expect.assertions(2);

    expect(nextId([0, 1, 2, 3, 5])).toStrictEqual(4);
    expect(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual(11);
  });
});
