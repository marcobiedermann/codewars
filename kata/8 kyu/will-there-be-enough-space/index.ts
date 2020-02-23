function enough(cap: number, on: number, wait: number): number {
  return Math.max(wait + on - cap, 0);
}

export default enough;
