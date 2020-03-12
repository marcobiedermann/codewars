function combat(health: number, damage: number): number {
  return Math.max(0, health - damage);
}

export default combat;
