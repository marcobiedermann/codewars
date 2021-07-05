import domainName from '.';

describe('domainName', () => {
  it('should extract domain from url', () => {
    expect.assertions(4);

    expect(domainName('http://google.com')).toStrictEqual('google');
    expect(domainName('http://google.co.jp')).toStrictEqual('google');
    expect(domainName('www.xakep.ru')).toStrictEqual('xakep');
    expect(domainName('https://youtube.com')).toStrictEqual('youtube');
  });
});
