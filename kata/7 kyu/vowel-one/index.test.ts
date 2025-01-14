import { describe, expect, it } from 'vitest';
import vowelOne from './index.ts';

describe('vowelOne', () => {
  it('should replace vowels with `1` and non-vowels with `0`', () => {
    expect(vowelOne('vowelOne')).toEqual('01010101');
    expect(vowelOne('123, arou')).toEqual('000001011');
  });
});
