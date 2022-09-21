import ArrowFunc from '.';

describe('arrowFunc', () => {
  it('should convert the number to its corresponding ascii character', () => {
    expect.assertions(2);

    expect(ArrowFunc([84, 101, 115, 116])).toBe('Test');
    expect(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72])).toBe('FUS ROH DAH');
  });
});
