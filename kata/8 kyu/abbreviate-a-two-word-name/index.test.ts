import abbrevName from '.';

describe('abbrevName', () => {
  it('should return two capital letters with a dot separating them', () => {
    expect.assertions(5);

    expect(abbrevName('Sam Harris')).toStrictEqual('S.H');
    expect(abbrevName('Patrick Feenan')).toStrictEqual('P.F');
    expect(abbrevName('Evan Cole')).toStrictEqual('E.C');
    expect(abbrevName('P Favuzzi')).toStrictEqual('P.F');
    expect(abbrevName('David Mendieta')).toStrictEqual('D.M');
  });
});
