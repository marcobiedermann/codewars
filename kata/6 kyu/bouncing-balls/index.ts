function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || h <= window) {
    return -1;
  }

  return bouncingBall(h * bounce, bounce, window) + 2;
}

export default bouncingBall;
