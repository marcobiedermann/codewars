import boolToWord from '.';

describe('boolToWord', () => {
  it('should convert boolean to word', () => {
    expect.assertions(2);

    expect(boolToWord(true)).toStrictEqual('Yes');
    expect(boolToWord(false)).toStrictEqual('No');
  });
});
