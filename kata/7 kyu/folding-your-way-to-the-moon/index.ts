function foldTo(distance: number, thickness = 0.0001): number | null {
  if (distance < 0) {
    return null;
  }

  if (distance < thickness) {
    return 0;
  }

  return Math.ceil(Math.log2(distance / thickness));
}

export default foldTo;
