import { describe, expect, it } from 'vitest';
import solve from './index.ts';

describe('solve', () => {
  it('should fix string case', () => {
    expect.assertions(4);

    expect(solve('code')).toBe('code');
    expect(solve('CODe')).toBe('CODE');
    expect(solve('COde')).toBe('code');
    expect(solve('Code')).toBe('code');
  });
});
