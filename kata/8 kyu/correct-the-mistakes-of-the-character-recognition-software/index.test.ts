import correct from '.';

describe('correct', () => {
  it('should correct errors in text', () => {
    expect.assertions(5);

    expect(correct('L0ND0N')).toStrictEqual('LONDON');
    expect(correct('DUBL1N')).toStrictEqual('DUBLIN');
    expect(correct('51NGAP0RE')).toStrictEqual('SINGAPORE');
    expect(correct('BUDAPE5T')).toStrictEqual('BUDAPEST');
    expect(correct('PAR15')).toStrictEqual('PARIS');
  });
});
