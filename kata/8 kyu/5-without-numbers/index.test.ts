import { expect } from 'vitest';
import unusualFive from '.';

describe('unusualFive', () => {
  it('should return `5`', () => {
    expect(unusualFive()).toBe(5);
  });
});
