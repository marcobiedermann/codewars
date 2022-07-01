import solution from '.';

describe('solution', () => {
  it('should split string into pairs of two', () => {
    expect(solution('abcdef')).toStrictEqual(['ab', 'cd', 'ef']);
    expect(solution('abcdefg')).toStrictEqual(['ab', 'cd', 'ef', 'g_']);
    expect(solution('')).toStrictEqual([]);
  });
});
