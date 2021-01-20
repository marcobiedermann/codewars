function flyBy(lamps: string, drone: string): string {
  const dronePath = drone.split('=').length;
  const lights = lamps.substring(0, dronePath).replace(/x/g, 'o');

  return lights + lamps.substring(lights.length, lamps.length);
}

export default flyBy;
