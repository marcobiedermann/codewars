import { describe, expect, it } from 'vitest';
import sayHello from './index.ts';

describe('sayHello', () => {
  it('should welcome a person', () => {
    expect.assertions(1);

    expect(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')).toBe(
      'Hello, John Smith! Welcome to Phoenix, Arizona!',
    );
  });
});
