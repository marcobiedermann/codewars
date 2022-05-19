type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';
type CardSymbol = '♣' | '♦' | '♥' | '♠';
type Ranks = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';

const suits: Record<CardSymbol, Suit> = {
  '♣': 'clubs',
  '♦': 'diamonds',
  '♥': 'hearts',
  '♠': 'spades',
};

function defineSuit(card: `${Ranks}${CardSymbol}`): Suit {
  const cardSymbol = card[card.length - 1] as CardSymbol;

  return suits[cardSymbol];
}

export default defineSuit;
