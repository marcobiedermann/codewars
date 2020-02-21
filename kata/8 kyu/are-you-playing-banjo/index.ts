function areYouPlayingBanjo(name: string): string {
  const isPlaying = name.toLowerCase().startsWith('r');

  if (!isPlaying) {
    return `${name} does not play banjo`;
  }

  return `${name} plays banjo`;
}

export default areYouPlayingBanjo;
