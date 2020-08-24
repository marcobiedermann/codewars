function convertToCelsius(temperature: number): number {
  return (temperature - 32) * (5 / 9);
}

function weatherInfo(temp: number): string {
  const c = convertToCelsius(temp);

  if (c < 0) {
    return `${c} is freezing temperature`;
  }

  return `${c} is above freezing temperature`;
}

export default weatherInfo;
