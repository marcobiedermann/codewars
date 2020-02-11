import repeatStr from '.';

describe('repeatStr', () => {
  it('should repeat string by count', () => {
    expect(repeatStr(3, '*')).toEqual('***');
    expect(repeatStr(5, '#')).toEqual('#####');
    expect(repeatStr(2, 'ha ')).toEqual('ha ha ');
  });
});
