import findMissingLetter from '.';

describe('findMissingLetter', () => {
  it('should find the missing letter', () => {
    expect.assertions(2);

    expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toStrictEqual('e');
    expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toStrictEqual('P');
  });
});
