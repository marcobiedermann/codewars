import { describe, expect, it } from 'vitest';
import thirt from '.';

describe('thirt', () => {
  it('should get the remainder when deviding by 13', () => {
    expect.assertions(5);

    expect(thirt(8529)).toBe(79);
    expect(thirt(85299258)).toBe(31);
    expect(thirt(5634)).toBe(57);
    expect(thirt(1111111111)).toBe(71);
    expect(thirt(987654321)).toBe(30);
  });
});
