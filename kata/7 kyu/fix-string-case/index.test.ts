import { expect } from 'vitest';
import solve from '.';

describe('solve', () => {
  it('should fix string case', () => {
    expect(solve('code')).toBe('code');
    expect(solve('CODe')).toBe('CODE');
    expect(solve('COde')).toBe('code');
    expect(solve('Code')).toBe('code');
  });
});
