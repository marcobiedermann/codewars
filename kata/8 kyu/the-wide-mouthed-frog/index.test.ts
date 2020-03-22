import mouthSize from '.';

describe('mouthSize', () => {
  it('should return mouth size of frog', () => {
    expect.assertions(3);

    expect(mouthSize('toucan')).toStrictEqual('wide');
    expect(mouthSize('ant bear')).toStrictEqual('wide');
    expect(mouthSize('alligator')).toStrictEqual('small');
  });
});
