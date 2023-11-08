import { describe, expect, it } from 'vitest';
import Ball from '.';

describe('ball', () => {
  it('should set `ballType` on instantiation', () => {
    expect.assertions(2);

    expect(new Ball().ballType).toBe('regular');
    expect(new Ball('super').ballType).toBe('super');
  });
});
