import { expect } from 'vitest';
import weatherInfo from '.';

describe('weatherInfo', () => {
  it('should convert fahrenheit to celsius', () => {
    expect(weatherInfo(50)).toBe('10 is above freezing temperature');
    expect(weatherInfo(23)).toBe('-5 is freezing temperature');
  });
});
