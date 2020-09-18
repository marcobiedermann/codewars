import decodeMorse from '.';

describe('decodeMorse', () => {
  it('should decode the morse code', () => {
    expect.assertions(1);

    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toStrictEqual('HEY JUDE');
  });
});
