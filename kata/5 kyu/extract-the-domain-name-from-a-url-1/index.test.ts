import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import domainName from './index.ts';

describe('domainName', () => {
  it('should extract domain from url', () => {
    assert.strictEqual(domainName('http://google.com'), 'google');
    assert.strictEqual(domainName('http://google.co.jp'), 'google');
    assert.strictEqual(domainName('www.xakep.ru'), 'xakep');
    assert.strictEqual(domainName('https://youtube.com'), 'youtube');
  });
});
