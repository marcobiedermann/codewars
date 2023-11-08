import { describe, expect, it } from 'vitest';
import switcheroo from '.';

describe('switcheroo', () => {
  it('should switch all `a` to `b` and vise versa', () => {
    expect.assertions(3);

    expect(switcheroo('abc')).toBe('bac');
    expect(switcheroo('aaabcccbaaa')).toBe('bbbacccabbb');
    expect(switcheroo('ccccc')).toBe('ccccc');
  });
});
