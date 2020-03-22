type MouthSize = 'small' | 'wide';

function mouthSize(animal: string): MouthSize {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

export default mouthSize;
