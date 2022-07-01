import { describe, expect, it, vi } from 'vitest';
import helloWorld from '.';

vi.spyOn(console, 'log').mockImplementation(() => 'Hello world!');

describe('helloWorld', () => {
  it('should define function `helloWorld`', () => {
    helloWorld();

    expect(helloWorld).toBeDefined();
    expect(console.log).toHaveBeenCalledWith('Hello World!');
  });
});
