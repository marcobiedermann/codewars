import addLetters from '.';

describe('addLetters', () => {
  it('should add up letters to one letter', () => {
    expect.assertions(7);

    expect(addLetters('a', 'b', 'c')).toStrictEqual('f');
    expect(addLetters('z')).toStrictEqual('z');
    expect(addLetters('a', 'b')).toStrictEqual('c');
    expect(addLetters('c')).toStrictEqual('c');
    expect(addLetters('z', 'a')).toStrictEqual('a');
    expect(addLetters('y', 'c', 'b')).toStrictEqual('d');
    expect(addLetters()).toStrictEqual('z');
  });
});
