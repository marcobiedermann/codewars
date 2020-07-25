import wordsToMarks from '.';

describe('wordsToMarks', () => {
  it('should sum up char codes of characters in string', () => {
    expect.assertions(5);

    expect(wordsToMarks('attitude')).toStrictEqual(100);
    expect(wordsToMarks('friends')).toStrictEqual(75);
    expect(wordsToMarks('family')).toStrictEqual(66);
    expect(wordsToMarks('selfness')).toStrictEqual(99);
    expect(wordsToMarks('knowledge')).toStrictEqual(96);
  });
});
