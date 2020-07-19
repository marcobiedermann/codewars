import solution from '.';

describe('solution', () => {
  it('should join strings based on their length', () => {
    expect.assertions(4);

    expect(solution('45', '1')).toStrictEqual('1451');
    expect(solution('13', '200')).toStrictEqual('1320013');
    expect(solution('Soon', 'Me')).toStrictEqual('MeSoonMe');
    expect(solution('U', 'False')).toStrictEqual('UFalseU');
  });
});
