import countSmileys from '.';

describe('countSmileys', () => {
  it('should count smiley faces in list', () => {
    expect(countSmileys([])).toEqual(0);
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toEqual(4);
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toEqual(2);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
  });
});
