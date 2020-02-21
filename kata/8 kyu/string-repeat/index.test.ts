import repeatStr from '.';

describe('repeatStr', () => {
  it('should repeat string by count', () => {
    expect.assertions(3);

    expect(repeatStr(3, '*')).toStrictEqual('***');
    expect(repeatStr(5, '#')).toStrictEqual('#####');
    expect(repeatStr(2, 'ha ')).toStrictEqual('ha ha ');
  });
});
