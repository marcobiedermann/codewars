import { describe, expect, it } from 'vitest';
import name from './index.ts';

describe('name', () => {
  it('should concatenate two strings', () => {
    expect.assertions(1);

    expect(name).toBe('codewa.rs');
  });
});
