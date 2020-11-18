import containAllRots from '.';

describe('containAllRots', () => {
  it('should check if all rotations of string are included', () => {
    expect.assertions(4);

    expect(containAllRots('', [])).toStrictEqual(true);
    expect(containAllRots('', ['bsjq', 'qbsj'])).toStrictEqual(true);
    expect(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs'])).toStrictEqual(
      true,
    );
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
    ).toStrictEqual(false);
  });
});
