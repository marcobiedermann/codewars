import wordsToMarks from '.';

describe('wordsToMarks', () => {
  it('should sum up char codes of characters in string', () => {
    expect(wordsToMarks('attitude')).toBe(100);
    expect(wordsToMarks('friends')).toBe(75);
    expect(wordsToMarks('family')).toBe(66);
    expect(wordsToMarks('selfness')).toBe(99);
    expect(wordsToMarks('knowledge')).toBe(96);
  });
});
