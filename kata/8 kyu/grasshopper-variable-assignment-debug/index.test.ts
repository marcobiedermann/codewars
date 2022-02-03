import { a, b, name } from '.';

describe('variable assignment', () => {
  it('should assign the string to its variable', () => {
    expect.assertions(3);

    expect(a).toBe('dev');
    expect(b).toBe('Lab');
    expect(name).toBe('devLab');
  });
});
