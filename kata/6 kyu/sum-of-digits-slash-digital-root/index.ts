function digital_root(n: number): number {
  return ((n - 1) % 9) + 1;
}

export default digital_root;
