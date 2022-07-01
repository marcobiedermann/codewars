import { expect, vi } from 'vitest';
import Solution from '.';

vi.spyOn(console, 'log').mockImplementation(() => 'Hello, world');

describe('solution', () => {
  it('should log `Hello World!`', () => {
    Solution.main();

    expect(console.log).toHaveBeenCalledWith('Hello World!');
  });
});
