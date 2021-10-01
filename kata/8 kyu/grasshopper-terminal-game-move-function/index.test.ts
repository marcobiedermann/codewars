import move from '.';

describe('move', () => {
  it('should return new position of hero', () => {
    expect.assertions(3);

    expect(move(0, 4)).toBe(8);
    expect(move(3, 6)).toBe(15);
    expect(move(2, 5)).toBe(12);
  });
});
