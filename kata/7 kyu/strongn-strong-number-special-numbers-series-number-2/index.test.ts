import strong from '.';

describe('strong', () => {
  it('should check if it is a strong number', () => {
    expect.assertions(6);

    expect(strong(1)).toStrictEqual('STRONG!!!!');
    expect(strong(2)).toStrictEqual('STRONG!!!!');
    expect(strong(145)).toStrictEqual('STRONG!!!!');
    expect(strong(7)).toStrictEqual('Not Strong !!');
    expect(strong(93)).toStrictEqual('Not Strong !!');
    expect(strong(185)).toStrictEqual('Not Strong !!');
  });
});
