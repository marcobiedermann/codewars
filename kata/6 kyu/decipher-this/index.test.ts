import decipherThis from '.';

describe('decipherThis', () => {
  it('should decrypt the message', () => {
    expect.assertions(1);

    expect(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')).toStrictEqual(
      'Have a go at this and see how you do',
    );
  });
});
