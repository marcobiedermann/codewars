import disariumNumber from '.';

describe('disariumNumber', () => {
  it('should check if number is a disarium number', () => {
    expect.assertions(5);

    expect(disariumNumber(89)).toBe('Disarium !!');
    expect(disariumNumber(564)).toBe('Not !!');
    expect(disariumNumber(1024)).toBe('Not !!');
    expect(disariumNumber(135)).toBe('Disarium !!');
    expect(disariumNumber(136586)).toBe('Not !!');
  });
});
