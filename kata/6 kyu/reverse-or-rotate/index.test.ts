import revrot from '.';

describe('revrot', () => {
  it('should reverse or rotate string', () => {
    expect.assertions(4);

    expect(revrot('1234', 0)).toStrictEqual('');
    expect(revrot('', 0)).toStrictEqual('');
    expect(revrot('1234', 5)).toStrictEqual('');
    expect(revrot('733049910872815764', 5)).toStrictEqual('330479108928157');
  });
});
