import disariumNumber from '.';

describe('disariumNumber', () => {
  it('should check if number is a disarium number', () => {
    expect.assertions(5);

    expect(disariumNumber(89)).toStrictEqual('Disarium !!');
    expect(disariumNumber(564)).toStrictEqual('Not !!');
    expect(disariumNumber(1024)).toStrictEqual('Not !!');
    expect(disariumNumber(135)).toStrictEqual('Disarium !!');
    expect(disariumNumber(136586)).toStrictEqual('Not !!');
  });
});
