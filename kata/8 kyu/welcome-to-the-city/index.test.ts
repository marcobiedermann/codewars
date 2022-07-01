import { expect } from 'vitest';
import sayHello from '.';

describe('sayHello', () => {
  it('should welcome a person', () => {
    expect(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')).toBe(
      'Hello, John Smith! Welcome to Phoenix, Arizona!',
    );
  });
});
