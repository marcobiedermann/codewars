import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getStrings from './index.ts';

describe('getStrings', () => {
  it('should count occurrences of letters in string', () => {
    assert.strictEqual(getStrings('Chicago'), 'c:**,h:*,i:*,a:*,g:*,o:*');
    assert.strictEqual(getStrings('Bangkok'), 'b:*,a:*,n:*,g:*,k:**,o:*');
    assert.strictEqual(getStrings('Las Vegas'), 'l:*,a:**,s:**,v:*,e:*,g:*');
  });
});
