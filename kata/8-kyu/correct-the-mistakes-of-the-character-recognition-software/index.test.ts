import correct from '.';

describe('correct', () => {
  it('should correct errors in text', () => {
    expect(correct('L0ND0N')).toEqual('LONDON');
    expect(correct('DUBL1N')).toEqual('DUBLIN');
    expect(correct('51NGAP0RE')).toEqual('SINGAPORE');
    expect(correct('BUDAPE5T')).toEqual('BUDAPEST');
    expect(correct('PAR15')).toEqual('PARIS');
  });
});
