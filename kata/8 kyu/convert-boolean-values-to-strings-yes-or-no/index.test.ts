import boolToWord from '.';

describe('boolToWord', () => {
  it('should convert boolean to word', () => {
    expect(boolToWord(true)).toEqual('Yes');
    expect(boolToWord(false)).toEqual('No');
  });
});
