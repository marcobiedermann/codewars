import spacify from '.';

describe('spacify', () => {
  it('should add a space between each character', () => {
    expect.assertions(2);

    expect(spacify('hello world')).toBe('h e l l o   w o r l d');
    expect(spacify('12345')).toBe('1 2 3 4 5');
  });
});
