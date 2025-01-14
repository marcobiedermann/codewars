import { describe, expect, it } from 'vitest';
import noSpace from './index.ts';

describe('noSpace', () => {
  it('should remove all whitespace from string', () => {
    expect.assertions(3);

    expect(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')).toBe('8j8mBliB8gimjB8B8jlB');
    expect(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')).toBe(
      '88Bifk8hB8BB8BBBB888chl8BhBfd',
    );
    expect(noSpace('8aaaaa dddd r     ')).toBe('8aaaaaddddr');
  });
});
