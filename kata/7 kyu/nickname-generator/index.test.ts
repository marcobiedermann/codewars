import nicknameGenerator from '.';

describe('nicknameGenerator', () => {
  it('should return a nickname', () => {
    expect.assertions(6);

    expect(nicknameGenerator('Jimmy')).toBe('Jim');
    expect(nicknameGenerator('Samantha')).toBe('Sam');
    expect(nicknameGenerator('Sam')).toBe('Error: Name too short');
    expect(nicknameGenerator('Kayne')).toBe('Kay');
    expect(nicknameGenerator('Melissa')).toBe('Mel');
    expect(nicknameGenerator('James')).toBe('Jam');
  });
});
