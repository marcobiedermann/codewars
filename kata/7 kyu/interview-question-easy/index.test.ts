import getStrings from '.';

describe('getStrings', () => {
  it('should count occurrences of letters in string', () => {
    expect.assertions(3);

    expect(getStrings('Chicago')).toStrictEqual('c:**,h:*,i:*,a:*,g:*,o:*');
    expect(getStrings('Bangkok')).toStrictEqual('b:*,a:*,n:*,g:*,k:**,o:*');
    expect(getStrings('Las Vegas')).toStrictEqual('l:*,a:**,s:**,v:*,e:*,g:*');
  });
});
