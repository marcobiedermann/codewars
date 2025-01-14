import { describe, expect, it } from 'vitest';
import domainName from './index.ts';

describe('domainName', () => {
  it('should extract domain from url', () => {
    expect.assertions(4);

    expect(domainName('http://google.com')).toBe('google');
    expect(domainName('http://google.co.jp')).toBe('google');
    expect(domainName('www.xakep.ru')).toBe('xakep');
    expect(domainName('https://youtube.com')).toBe('youtube');
  });
});
