import apple from '.';

describe('apple', () => {
  it('should check for apple turnover', () => {
    expect.assertions(2);

    expect(apple('50')).toBe("It's hotter than the sun!!");
    expect(apple(4)).toBe('Help yourself to a honeycomb Yorkie for the glovebox.');
  });
});
