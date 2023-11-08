import { describe, expect, it } from 'vitest';
import solve from '.';

describe('solve', () => {
  it('should reverse string while keeping position of spaces', () => {
    expect.assertions(4);

    expect(solve('codewars')).toBe('srawedoc');
    expect(solve('your code')).toBe('edoc ruoy');
    expect(solve('your code rocks')).toBe('skco redo cruoy');
    expect(solve('i love codewars')).toBe('s rawe docevoli');
  });
});
