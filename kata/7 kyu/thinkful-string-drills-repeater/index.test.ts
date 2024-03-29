import { describe, expect, it } from 'vitest';
import repeater from '.';

describe('repeater', () => {
  it('should repeat string `n` times', () => {
    expect.assertions(3);

    expect(repeater('a', 5)).toBe('aaaaa');
    expect(repeater('Na', 16)).toBe('NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
    expect(repeater('Wub ', 6)).toBe('Wub Wub Wub Wub Wub Wub ');
  });
});
