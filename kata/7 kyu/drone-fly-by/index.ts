function flyBy(lamps: string, drone: string): string {
  if (drone.length > lamps.length) {
    return 'o'.repeat(lamps.length);
  }

  return lamps.replace('x'.repeat(drone.length), 'o'.repeat(drone.length));
}

export default flyBy;
