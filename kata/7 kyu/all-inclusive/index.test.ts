import containAllRots from '.';

describe('containAllRots', () => {
  it('should check if all rotations of string are included', () => {
    expect.assertions(4);

    expect(containAllRots('', [])).toBe(true);
    expect(containAllRots('', ['bsjq', 'qbsj'])).toBe(true);
    expect(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs'])).toBe(true);
    expect(
      containAllRots('XjYABhR', [
        'TzYxlgfnhf',
        'yqVAuoLjMLy',
        'BhRXjYA',
        'YABhRXj',
        'hRXjYAB',
        'jYABhRX',
        'XjYABhR',
        'ABhRXjY',
      ]),
    ).toBe(false);
  });
});
