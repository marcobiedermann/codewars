import spread from '.';

describe('spread', () => {
  it('should call the function with the given arguments', () => {
    expect(spread((x: number, y: number) => x + y, [1, 2])).toBe(3);
  });
});
