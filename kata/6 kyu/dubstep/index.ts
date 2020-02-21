function songDecoder(song: string): string {
  return song.replace(/(WUB){1,}/g, ' ').trim();
}

export default songDecoder;
