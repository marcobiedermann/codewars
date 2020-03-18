type Animal = 'sheep' | 'wolf';

function warnTheSheep(queue: Animal[]): string {
  const indexOf = queue.indexOf('wolf');
  const sheepInFront = queue.length - (indexOf + 1);

  return sheepInFront
    ? `Oi! Sheep number ${sheepInFront}! You are about to be eaten by a wolf!`
    : 'Pls go away and stop eating my sheep';
}

export default warnTheSheep;
