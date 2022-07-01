import { expect } from 'vitest';
import greet from '.';

describe('jennygreet', () => {
  it('should greet some people normally', () => {
    expect(greet('Jim')).toBe('Hello, Jim!');
    expect(greet('Jane')).toBe('Hello, Jane!');
    expect(greet('Simon')).toBe('Hello, Simon!');
  });

  it('should greet Johnny a little bit more special', () => {
    expect(greet('Johnny')).toBe('Hello, my love!');
  });
});
