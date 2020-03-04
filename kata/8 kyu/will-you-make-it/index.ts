function zeroFuel(distanceToPump: number, mpg: number, fuelLeft: number): boolean {
  return mpg * fuelLeft >= distanceToPump;
}

export default zeroFuel;
