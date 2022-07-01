import { expect } from 'vitest';
import name from '.';

describe('name', () => {
  it('should concatenate two strings', () => {
    expect(name).toBe('codewa.rs');
  });
});
