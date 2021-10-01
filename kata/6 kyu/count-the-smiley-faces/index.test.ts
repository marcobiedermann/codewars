import countSmileys from '.';

describe('countSmileys', () => {
  it('should count smiley faces in list', () => {
    expect.assertions(4);

    expect(countSmileys([])).toBe(0);
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toBe(4);
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toBe(2);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });
});
