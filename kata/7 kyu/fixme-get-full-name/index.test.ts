import { describe, expect, it } from 'vitest';
import Dinglemouse from './index.ts';

describe('dinglemouse', () => {
  it('should get the full name', () => {
    expect.assertions(1);

    expect(new Dinglemouse('Clint', 'Eastwood').getFullName()).toBe('Clint Eastwood');
  });
});
