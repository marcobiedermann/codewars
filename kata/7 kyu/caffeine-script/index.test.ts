import { describe, expect, it } from 'vitest';
import caffeineBuzz from './index.ts';

describe('caffeineBuzz', () => {
  it('should return caffein script', () => {
    expect.assertions(4);

    expect(caffeineBuzz(1)).toBe('mocha_missing!');
    expect(caffeineBuzz(3)).toBe('Java');
    expect(caffeineBuzz(6)).toBe('JavaScript');
    expect(caffeineBuzz(12)).toBe('CoffeeScript');
  });
});
