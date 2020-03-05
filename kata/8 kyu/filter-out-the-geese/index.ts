const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

function gooseFilter(birds: string[]): string[] {
  return birds.filter(bird => !geese.includes(bird));
}

export default gooseFilter;
