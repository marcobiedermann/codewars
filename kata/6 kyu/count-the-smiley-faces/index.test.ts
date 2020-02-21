import countSmileys from '.';

describe('countSmileys', () => {
  it('should count smiley faces in list', () => {
    expect.assertions(4);

    expect(countSmileys([])).toStrictEqual(0);
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toStrictEqual(4);
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toStrictEqual(2);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toStrictEqual(1);
  });
});
