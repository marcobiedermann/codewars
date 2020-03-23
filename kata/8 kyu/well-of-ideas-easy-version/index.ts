function well(x: string[]): string {
  const goodCount = x.filter((idea) => idea === 'good').length;

  if (goodCount > 2) {
    return 'I smell a series!';
  }

  if (goodCount >= 1) {
    return 'Publish!';
  }

  return 'Fail!';
}

export default well;
