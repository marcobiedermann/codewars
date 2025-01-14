import { describe, expect, it } from 'vitest';
import generateShape from './index.ts';

describe('generateShape', () => {
  it('should generate a square that is as long and wide as the integer', () => {
    expect.assertions(1);

    expect(generateShape(8)).toBe(
      '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++',
    );
  });
});
