// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from 'vitest';
import contamination from '.';

describe('contamination', () => {
  it('should mutate the text', () => {
    expect(contamination('abc', 'z')).toEqual('zzz');
    expect(contamination('', 'z')).toEqual('');
    expect(contamination('abc', '')).toEqual('');
    expect(contamination('_3ebzgh4', '&')).toEqual('&&&&&&&&');
    expect(contamination('//case', ' ')).toEqual('      ');
  });
});
