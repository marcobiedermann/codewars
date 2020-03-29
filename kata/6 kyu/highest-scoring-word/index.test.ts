import high from '.';

describe('high', () => {
  it('should return highest scoring word', () => {
    expect.assertions(3);

    expect(high('man i need a taxi up to ubud')).toStrictEqual('taxi');
    expect(high('what time are we climbing up the volcano')).toStrictEqual('volcano');
    expect(high('take me to semynak')).toStrictEqual('semynak');
  });
});
