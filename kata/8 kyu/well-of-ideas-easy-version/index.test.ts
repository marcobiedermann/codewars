import well from '.';

describe('well', () => {
  it('should should check good ideas', () => {
    expect.assertions(3);

    expect(well(['bad', 'bad', 'bad'])).toStrictEqual('Fail!');
    expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toStrictEqual('Publish!');
    expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toStrictEqual(
      'I smell a series!',
    );
  });
});
