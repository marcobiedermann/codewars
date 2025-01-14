import { describe, expect, it } from 'vitest';
import { scoobydoo, snoopy } from './index.ts';

describe('dog', () => {
  it('should bark', () => {
    expect.assertions(2);

    expect(snoopy.bark()).toBe('Woof');
    expect(scoobydoo.bark()).toBe('Woof');
  });
});
