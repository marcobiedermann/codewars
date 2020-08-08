class Guesser {
  number: number;

  lives: number;

  constructor(number: number, lives: number) {
    this.number = number;
    this.lives = lives;
  }

  guess(n: number): boolean {
    if (!this.lives) {
      throw new Error('already dead');
    }

    if (n !== this.number) {
      this.lives -= 1;

      return false;
    }

    return true;
  }
}

export default Guesser;
