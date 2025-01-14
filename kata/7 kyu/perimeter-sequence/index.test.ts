import { describe, expect, it } from 'vitest';
import perimeterSequence from './index.ts';

describe('perimeterSequence', () => {
  it('should calculate the perimeter of the `nth` shape', () => {
    expect.assertions(1);

    expect(perimeterSequence(1, 3)).toBe(12);
  });
});
