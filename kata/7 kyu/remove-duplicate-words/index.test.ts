import removeDuplicateWords from '.';

describe('removeDuplicateWords', () => {
  it('should remove duplicate words', () => {
    expect.assertions(1);

    expect(
      removeDuplicateWords(
        'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta',
      ),
    ).toStrictEqual('alpha beta gamma delta');
  });
});
