import updateLight from '.';

describe('updateLight', () => {
  it('should return next color', () => {
    expect.assertions(3);

    expect(updateLight('green')).toStrictEqual('yellow');
    expect(updateLight('yellow')).toStrictEqual('red');
    expect(updateLight('red')).toStrictEqual('green');
  });
});
