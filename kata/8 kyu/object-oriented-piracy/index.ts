class Ship {
  constructor(
    private draft: number,
    private crew: number,
  ) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt(): boolean {
    return this.draft - this.crew * 1.5 > 20;
  }
}

export default Ship;
