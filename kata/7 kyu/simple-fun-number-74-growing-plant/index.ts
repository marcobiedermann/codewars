function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  return Math.max(Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)), 0) + 1;
}

export default growingPlant;
