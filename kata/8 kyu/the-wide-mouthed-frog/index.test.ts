import mouthSize from '.';

describe('mouthSize', () => {
  it('should return mouth size of frog', () => {
    expect.assertions(3);

    expect(mouthSize('toucan')).toBe('wide');
    expect(mouthSize('ant bear')).toBe('wide');
    expect(mouthSize('alligator')).toBe('small');
  });
});
