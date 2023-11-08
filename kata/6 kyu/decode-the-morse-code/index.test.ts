import { describe, expect, it } from 'vitest';
import decodeMorse from '.';

describe('decodeMorse', () => {
  it('should decode the morse code', () => {
    expect.assertions(1);

    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
  });
});
