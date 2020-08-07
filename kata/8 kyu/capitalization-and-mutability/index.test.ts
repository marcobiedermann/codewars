import capitalizeWord from '.';

describe('capitalizeWord', () => {
  it('should capitalize word', () => {
    expect.assertions(3);

    expect(capitalizeWord('word')).toStrictEqual('Word');
    expect(capitalizeWord('i')).toStrictEqual('I');
    expect(capitalizeWord('glasswear')).toStrictEqual('Glasswear');
  });
});
