import infected from '.';

describe('infected', () => {
  it('should calculate percentage of infected populatopn', () => {
    expect.assertions(5);

    expect(infected('01000000X000X011X0X')).toStrictEqual(73.33333333333333);
    expect(infected('01X000X010X011XX')).toStrictEqual(72.72727272727273);
    expect(infected('XXXXX')).toStrictEqual(0);
    expect(infected('0000000010')).toStrictEqual(100);
    expect(infected('X00X000000X10X0100')).toStrictEqual(42.857142857142854);
  });
});
