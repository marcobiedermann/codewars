import nameShuffler from '.';

describe('nameShuffler', () => {
  it('should', () => {
    expect.assertions(1);

    expect(nameShuffler('john McClane')).toStrictEqual('McClane john');
  });
});
