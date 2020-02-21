import list from '.';

describe('list', () => {
  it('should separate names by comma, except for the last two', () => {
    expect(
      list([
        { name: 'Bart' },
        { name: 'Lisa' },
        { name: 'Maggie' },
        { name: 'Homer' },
        { name: 'Marge' },
      ]),
    ).toEqual('Bart, Lisa, Maggie, Homer & Marge');
    expect(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])).toEqual(
      'Bart, Lisa & Maggie',
    );
    expect(list([{ name: 'Bart' }, { name: 'Lisa' }])).toEqual('Bart & Lisa');
    expect(list([{ name: 'Bart' }])).toEqual('Bart');
    expect(list([])).toEqual('');
  });
});
