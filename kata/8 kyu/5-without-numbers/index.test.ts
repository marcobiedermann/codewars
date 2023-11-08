import { describe, expect, it } from 'vitest';
import unusualFive from '.';

describe('unusualFive', () => {
  it('should return `5`', () => {
    expect.assertions(1);

    expect(unusualFive()).toBe(5);
  });
});
