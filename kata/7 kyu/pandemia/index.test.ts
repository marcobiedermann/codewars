import infected from '.';

describe('infected', () => {
  it('should calculate percentage of infected populatopn', () => {
    expect(infected('01000000X000X011X0X')).toEqual(73.33333333333333);
    expect(infected('01X000X010X011XX')).toEqual(72.72727272727273);
    expect(infected('XXXXX')).toEqual(0);
    expect(infected('0000000010')).toEqual(100);
    expect(infected('X00X000000X10X0100')).toEqual(42.857142857142854);
  });
});
