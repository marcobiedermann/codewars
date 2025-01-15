import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import weatherInfo from './index.ts';

describe('weatherInfo', () => {
  it('should convert fahrenheit to celsius', () => {
    assert.strictEqual(weatherInfo(50), '10 is above freezing temperature');
    assert.strictEqual(weatherInfo(23), '-5 is freezing temperature');
  });
});
