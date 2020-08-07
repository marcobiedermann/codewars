function race(v1: number, v2: number, g: number): [number, number, number] | null {
  if (v1 >= v2) {
    return null;
  }

  const time = g / (v2 - v1);

  const hour = Math.floor(time);
  const min = Math.floor((time * 60) % 60);
  const sec = Math.floor((time * 3600) % 60);

  return [hour, min, sec];
}

export default race;
