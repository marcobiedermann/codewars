import booleanToString from '.';

describe('booleanToString', () => {
  it('should convert boolean to string', () => {
    expect.assertions(2);

    expect(booleanToString(true)).toStrictEqual('true');
    expect(booleanToString(false)).toStrictEqual('false');
  });
});
