import main from '.';

describe('main', () => {
  it('should concatenate two strings', () => {
    expect.assertions(2);

    expect(main('take ', 'item')).toStrictEqual('take item');
    expect(main('use ', 'sword')).toStrictEqual('use sword');
  });
});
