import { describe, expect, it } from 'vitest';
import diamond from './index.ts';

describe('diamond', () => {
  it('should print diamond', () => {
    expect.assertions(6);

    expect(diamond(1)).toBe('*\n');
    expect(diamond(3)).toBe(' *\n***\n *\n');
    expect(diamond(5)).toBe('  *\n ***\n*****\n ***\n  *\n');
    expect(diamond(2)).toBeNull();
    expect(diamond(-3)).toBeNull();
    expect(diamond(0)).toBeNull();
  });
});
