function elevator(left: number, right: number, call: number): 'left' | 'right' {
  const distanceLeft = Math.abs(left - call);
  const distanceRight = Math.abs(right - call);

  return distanceLeft < distanceRight ? 'left' : 'right';
}

export default elevator;
