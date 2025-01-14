import { describe, expect, it } from 'vitest';
import sevenAte9 from './index.ts';

describe('sevenAte9', () => {
  it('should remove evert `9` that is in between `7`s', () => {
    expect.assertions(3);

    expect(sevenAte9('797')).toBe('77');
    expect(sevenAte9('7979797')).toBe('7777');
    expect(sevenAte9('165561786121789797')).toBe('16556178612178977');
  });
});
