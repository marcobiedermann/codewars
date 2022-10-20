import solution from '.';

describe('solution', () => {
  it('should truncate the string if limit is reached', () => {
    expect.assertions(3);

    expect(solution('Testing String', 3)).toBe('Tes...');
    expect(solution('Testing String', 8)).toBe('Testing ...');
    expect(solution('Test', 8)).toBe('Test');
  });
});
