function apple(x: number | string): string {
  const parsed = typeof x === 'string' ? parseInt(x, 10) : x;

  if (parsed ** 2 > 1000) {
    return "It's hotter than the sun!!";
  }

  return 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

export default apple;
