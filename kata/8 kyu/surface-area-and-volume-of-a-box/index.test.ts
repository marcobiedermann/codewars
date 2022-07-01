import { expect } from 'vitest';
import getSize from '.';

describe('getSize', () => {
  it('should return area and volume of box', () => {
    expect(getSize(4, 2, 6)[1]).toBe(48);
    expect(getSize(10, 10, 10)).toStrictEqual([600, 1000]);
    expect(getSize(4, 2, 6)[0]).toBe(88);
    expect(getSize(4, 2, 6)[1]).toBe(48);
  });
});
