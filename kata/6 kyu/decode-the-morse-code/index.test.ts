import decodeMorse from '.';

describe('decodeMorse', () => {
  it('should decode the morse code', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
  });
});
