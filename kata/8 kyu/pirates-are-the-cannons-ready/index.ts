type Gunner = Record<string, 'aye' | 'nay'>;

function cannonsReady(gunners: Gunner): 'Fire!' | 'Shiver me timbers!' {
  const areLoaded = Object.values(gunners).every((value) => value === 'aye');

  if (areLoaded) {
    return 'Fire!';
  }

  return 'Shiver me timbers!';
}

export default cannonsReady;
