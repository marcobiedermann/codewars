import { describe, expect, it } from 'vitest';
import greet from './index.ts';

describe('greet', () => {
  it('should greet and capitalize name', () => {
    expect.assertions(1);

    expect(greet('riley')).toBe('Hello Riley!');
  });
});
