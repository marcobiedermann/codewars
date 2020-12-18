import capitalize from '.';

describe('capitalize', () => {
  it('should capitalize all letters at the given indices', () => {
    expect.assertions(6);

    expect(capitalize('abcdef', [1, 2, 5])).toStrictEqual('aBCdeF');
    expect(capitalize('abcdef', [1, 2, 5, 100])).toStrictEqual('aBCdeF');
    expect(capitalize('codewars', [1, 3, 5, 50])).toStrictEqual('cOdEwArs');
    expect(capitalize('abracadabra', [2, 6, 9, 10])).toStrictEqual('abRacaDabRA');
    expect(capitalize('codewarriors', [5])).toStrictEqual('codewArriors');
    expect(capitalize('indexinglessons', [0])).toStrictEqual('Indexinglessons');
  });
});
