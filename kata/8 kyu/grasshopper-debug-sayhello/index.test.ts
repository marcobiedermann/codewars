import { describe, expect, it } from 'vitest';
import sayHello from '.';

describe('sayHello', () => {
  it('should should say hello to name passed in', () => {
    expect.assertions(4);

    expect(sayHello('Mr. Spock')).toBe('Hello, Mr. Spock');
    expect(sayHello('Captain Kirk')).toBe('Hello, Captain Kirk');
    expect(sayHello('Liutenant Uhura')).toBe('Hello, Liutenant Uhura');
    expect(sayHello('Dr. McCoy')).toBe('Hello, Dr. McCoy');
  });
});
