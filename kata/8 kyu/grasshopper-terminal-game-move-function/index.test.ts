import move from '.';

describe('move', () => {
  it('should return new position of hero', () => {
    expect.assertions(3);

    expect(move(0, 4)).toStrictEqual(8);
    expect(move(3, 6)).toStrictEqual(15);
    expect(move(2, 5)).toStrictEqual(12);
  });
});
