function pillars(num_pill: number, dist: number, width: number): number {
  if (num_pill < 2) {
    return 0;
  }

  const distanceInCm = dist * 100;

  return (num_pill - 2) * width + (num_pill - 1) * distanceInCm;
}

export default pillars;
