import high from '.';

describe('high', () => {
  it('should return highest scoring word', () => {
    expect(high('man i need a taxi up to ubud')).toBe('taxi');
    expect(high('what time are we climbing up the volcano')).toBe('volcano');
    expect(high('take me to semynak')).toBe('semynak');
  });
});
