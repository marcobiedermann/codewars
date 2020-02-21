import list from '.';

describe('list', () => {
  it('should separate names by comma, except for the last two', () => {
    expect.assertions(5);

    expect(
      list([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        { name: 'Homer' },
        { name: 'Marge' },
      ]),
    ).toStrictEqual('Bart, Lisa, Maggie, Homer & Marge');
    expect(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])).toStrictEqual(
      'Bart, Lisa & Maggie',
    );
    expect(list([{ name: 'Bart' }, { name: 'Lisa' }])).toStrictEqual('Bart & Lisa');
    expect(list([{ name: 'Bart' }])).toStrictEqual('Bart');
    expect(list([])).toStrictEqual('');
  });
});
