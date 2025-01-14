import { describe, expect, it } from 'vitest';
import longest from './index.ts';

describe('longest', () => {
  it('should return a new sorted string containing distinct letters', () => {
    expect.assertions(3);

    expect(longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty');
    expect(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toBe(
      'abcdefghilnoprstu',
    );
    expect(longest('inmanylanguages', 'theresapairoffunctions')).toBe('acefghilmnoprstuy');
  });
});
