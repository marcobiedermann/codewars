import { expect, vi } from 'vitest';
import _if from '.';

vi.spyOn(console, 'log').mockImplementation(() => 'True');

describe('_if', () => {
  it('should call `func1` when `bool` is truthy, otherwise `func2`', () => {
    _if(
      true,
      () => {
        console.log('True');
      },
      () => {
        console.log('false');
      },
    );
    expect(_if).toBeDefined();
    expect(console.log).toHaveBeenCalledWith('True');
  });
});
