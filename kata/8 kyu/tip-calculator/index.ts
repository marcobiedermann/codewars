interface Ratings {
  [key: string]: number;
}

const ratings: Ratings = {
  terrible: 0,
  poor: 5,
  good: 10,
  great: 15,
  excellent: 20,
};

function calculateTip(amount: number, rating: string): number | string {
  const normalizedRating = rating.toLowerCase();
  const tip = ratings[normalizedRating];

  return normalizedRating in ratings ? Math.ceil((amount / 100) * tip) : 'Rating not recognised';
}

export default calculateTip;
