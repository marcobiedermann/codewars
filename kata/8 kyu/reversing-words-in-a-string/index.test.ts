import reverse from '.';

describe('reverse', () => {
  it('should reverse words in string', () => {
    expect.assertions(5);

    expect(reverse('I am an expert at this')).toStrictEqual('this at expert an am I');
    expect(reverse('This is so easy')).toStrictEqual('easy so is This');
    expect(reverse('no one cares')).toStrictEqual('cares one no');
    expect(reverse('')).toStrictEqual('');
    expect(reverse('CodeWars')).toStrictEqual('CodeWars');
  });
});
