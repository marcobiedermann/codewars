import capitalizeWord from '.';

describe('capitalizeWord', () => {
  it('should capitalize word', () => {
    expect(capitalizeWord('word')).toBe('Word');
    expect(capitalizeWord('i')).toBe('I');
    expect(capitalizeWord('glasswear')).toBe('Glasswear');
  });
});
