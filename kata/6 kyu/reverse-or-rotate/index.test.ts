import revrot from '.';

describe('revrot', () => {
  it('should reverse or rotate string', () => {
    expect.assertions(5);

    expect(revrot('1234', 0)).toStrictEqual('');
    expect(revrot('', 0)).toStrictEqual('');
    expect(revrot('1234', 5)).toStrictEqual('');
    expect(revrot('733049910872815764', 5)).toStrictEqual('330479108928157');
    expect(
      revrot('312084788360207597307420780249195813555836722615615827889419652061022081907', 8),
    ).toStrictEqual('120847833602075802470379919420878555318551622763158278860256914918022016');
  });
});
