import leo from '.';

describe('leo', () => {
  it('should describe leo', () => {
    expect.assertions(4);

    expect(leo(89)).toBe('Leo got one already!');
    expect(leo(88)).toBe('Leo finally won the oscar! Leo is happy');
    expect(leo(87)).toBe('When will you give Leo an Oscar?');
    expect(leo(86)).toBe('Not even for Wolf of wallstreet?!');
  });
});
