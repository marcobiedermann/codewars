function cockroachSpeed(s: number): number {
  const KILOMETER_IN_CENTIMETERS = 1 * 100 * 1000;
  const HOUR_IN_SECONDS = 1 * 60 * 60;

  return Math.floor((s * KILOMETER_IN_CENTIMETERS) / HOUR_IN_SECONDS);
}

export default cockroachSpeed;
