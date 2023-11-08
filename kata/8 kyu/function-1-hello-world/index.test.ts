import { describe, expect, it } from 'vitest';
import greet from '.';

describe('greet', () => {
  it('is it a function?', () => {
    expect.assertions(1);

    expect(typeof greet).toBe('function');
  });

  it('correct return-value?', () => {
    expect.assertions(1);

    expect(greet()).toBe('hello world!');
  });
});
