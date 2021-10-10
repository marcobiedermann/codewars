import { decode, encode } from '.';

describe('foo', () => {
  it('should', () => {
    expect.assertions(4);

    expect(encode('hello')).toBe('h2ll4');
    expect(encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
    expect(encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
    expect(decode('h2ll4')).toBe('hello');
  });
});
