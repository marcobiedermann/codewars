import main from '.';

describe('main', () => {
  it('should concatenate two strings', () => {
    expect(main('take ', 'item')).toBe('take item');
    expect(main('use ', 'sword')).toBe('use sword');
  });
});
