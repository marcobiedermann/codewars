import { expect } from 'vitest';
import saleHotdogs from '.';

describe('saleHotdogs', () => {
  it('should', () => {
    expect(saleHotdogs(1)).toBe(100);
    expect(saleHotdogs(4)).toBe(400);
    expect(saleHotdogs(5)).toBe(475);
    expect(saleHotdogs(9)).toBe(855);
    expect(saleHotdogs(10)).toBe(900);
    expect(saleHotdogs(100)).toBe(9000);
  });
});
