import presses from '.';

describe('presses', () => {
  it('should calculate the number of button presses', () => {
    expect.assertions(2);

    expect(presses('LOL')).toBe(9);
    expect(presses('HOW R U')).toBe(13);
  });
});
