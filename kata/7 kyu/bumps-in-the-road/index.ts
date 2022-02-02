function bump(x: string): string {
  const count = x.split('n').length - 1;

  if (count > 15) {
    return 'Car Dead';
  }

  return 'Woohoo!';
}

export default bump;
