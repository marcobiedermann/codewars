import divCon from '.';

describe('divCon', () => {
  it('should', () => {
    expect.assertions(3);

    expect(divCon([9, 3, '7', '3'])).toBe(2);
    expect(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toBe(14);
    expect(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])).toBe(13);
  });
});
