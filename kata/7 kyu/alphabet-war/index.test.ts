import alphabetWar from '.';

describe('alphabetWar', () => {
  it('should return which side wins the war', () => {
    expect.assertions(4);

    expect(alphabetWar('z')).toStrictEqual('Right side wins!');
    expect(alphabetWar('zdqmwpbs')).toStrictEqual("Let's fight again!");
    expect(alphabetWar('zzzzs')).toStrictEqual('Right side wins!');
    expect(alphabetWar('wwwwww')).toStrictEqual('Left side wins!');
  });
});
