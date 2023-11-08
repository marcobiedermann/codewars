import { describe, expect, it } from 'vitest';
import howMuchWater from '.';

describe('howMuchWater', () => {
  it('should calculate the amount of water needed', () => {
    expect.assertions(4);

    expect(howMuchWater(10, 10, 21)).toBe('Too much clothes');
    expect(howMuchWater(10, 10, 2)).toBe('Not enough clothes');
    expect(howMuchWater(10, 11, 20)).toBe(23.58);
    expect(howMuchWater(50, 15, 29)).toBe(189.87);
  });
});
