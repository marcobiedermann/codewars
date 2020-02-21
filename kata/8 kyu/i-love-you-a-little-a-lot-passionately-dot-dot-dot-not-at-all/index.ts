const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

function howMuchILoveYou(nbPetals: number): string {
  return phrases[(nbPetals - 1) % phrases.length];
}

export default howMuchILoveYou;
