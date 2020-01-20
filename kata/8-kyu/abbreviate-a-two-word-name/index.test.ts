import abbrevName from '.';

describe('abbrevName', () => {
  it('should return two capital letters with a dot separating them', () => {
    expect(abbrevName('Sam Harris')).toEqual('S.H');
    expect(abbrevName('Patrick Feenan')).toEqual('P.F');
    expect(abbrevName('Evan Cole')).toEqual('E.C');
    expect(abbrevName('P Favuzzi')).toEqual('P.F');
    expect(abbrevName('David Mendieta')).toEqual('D.M');
  });
});
