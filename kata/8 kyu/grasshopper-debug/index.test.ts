import weatherInfo from '.';

describe('weatherInfo', () => {
  it('should convert fahrenheit to celsius', () => {
    expect.assertions(2);

    expect(weatherInfo(50)).toStrictEqual('10 is above freezing temperature');
    expect(weatherInfo(23)).toStrictEqual('-5 is freezing temperature');
  });
});
