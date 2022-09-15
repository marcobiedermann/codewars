import cannonsReady from '.';

describe('cannonsReady', () => {
  it('should check if all cannons are ready', () => {
    expect.assertions(2);

    expect(cannonsReady({ Mike: 'aye', Joe: 'aye', Johnson: 'aye', Peter: 'aye' })).toBe('Fire!');
    expect(cannonsReady({ Mike: 'aye', Joe: 'nay', Johnson: 'aye', Peter: 'aye' })).toBe(
      'Shiver me timbers!',
    );
  });
});
