import { expect } from 'vitest';
import findScreenHeight from '.';

describe('findScreenHeight', () => {
  it('should return width and height of monitor', () => {
    expect(findScreenHeight(1024, '4:3')).toBe('1024x768');
    expect(findScreenHeight(1280, '16:9')).toBe('1280x720');
    expect(findScreenHeight(3840, '32:9')).toBe('3840x1080');
  });
});
