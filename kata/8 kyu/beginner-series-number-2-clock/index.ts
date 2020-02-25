function past(h: number, m: number, s: number): number {
  return (h * 3600 + m * 60 + s) * 1000;
}

export default past;
