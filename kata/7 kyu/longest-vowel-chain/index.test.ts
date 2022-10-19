import solve from '.';

describe('solve', () => {
  it('should find the longest vowel chain', () => {
    expect.assertions(7);

    expect(solve('codewarriors')).toBe(2);
    expect(solve('suoidea')).toBe(3);
    expect(solve('ultrarevolutionariees')).toBe(3);
    expect(solve('strengthlessnesses')).toBe(1);
    expect(solve('cuboideonavicuare')).toBe(2);
    expect(solve('chrononhotonthuooaos')).toBe(5);
    expect(solve('iiihoovaeaaaoougjyaw')).toBe(8);
  });
});
