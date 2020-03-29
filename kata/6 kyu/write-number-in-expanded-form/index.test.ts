import expandedForm from '.';

describe('expandedForm', () => {
  it('should return number in expanded form', () => {
    expect.assertions(3);

    expect(expandedForm(12)).toStrictEqual('10 + 2');
    expect(expandedForm(42)).toStrictEqual('40 + 2');
    expect(expandedForm(70304)).toStrictEqual('70000 + 300 + 4');
  });
});
